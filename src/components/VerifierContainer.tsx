import { FC, useState } from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "./ui/button";
import { useStateVerifyStatus, useStatEerrorText } from "@/lib/jotai";
import { VerifyStatus, DidkitRes } from "@/types";
import { verifyCredential } from "@spruceid/didkit-wasm";
import { BiSolidErrorAlt } from "react-icons/bi";
import { getAgent } from "@/lib/veramo";

export const VerifierContainer: FC = () => {
  const [vc, setVc] = useState("");
  const [res, setRes] = useStateVerifyStatus();
  const [error, setError] = useStatEerrorText();

  const placeholderVC = `{  
    "@context": [  
      "https://www.w3.org/ns/credentials/v2",  
      "https://www.w3.org/ns/credentials/examples/v2"  
    ],  
    "id": "http://example.com/credentials/4643",  
    "type": ["VerifiableCredential"],  
    "issuer": "https://example.com/issuers/14",  
    "validFrom": "2018-02-24T05:28:04Z",  
    "credentialSubject": {  
      "id": "did:example:abcdef1234567",  
      "name": "Jane Doe"  
    }  
  }`;

  const verify = async (vc: string) => {
    try {
      setRes(VerifyStatus.verifying);
      const proofOptions = {};
      const res = await verifyCredential(vc, JSON.stringify(proofOptions));
      console.log({ res });
      const resJson = JSON.parse(res) as DidkitRes;
      // verification fails?
      if (resJson.errors && resJson.errors.length > 0) {
        // If verification fails with Didkit (which sometimes happens with EIP712), verify with Veramo as well.
        const veramo = getAgent();
        const veramoRes = await veramo.verifyCredential({
          credential: JSON.parse(vc),
        });
        console.log({ veramoRes });
        if (veramoRes.verified) {
          //Verification Success
          setError("");
          setRes(VerifyStatus.success);
          return;
        }
        setError(veramoRes.error?.message || resJson.errors.join(","));
        setRes(VerifyStatus.failed);
        return;
      }
      // Verification Success?
      if (resJson.warnings && resJson.warnings.length > 0) {
        setError(resJson.warnings.join(","));
        setRes(VerifyStatus.success);
        return;
      }

      //Verification Success
      setError("");
      setRes(VerifyStatus.success);
    } catch (error) {
      console.error(error);
      setError(JSON.stringify(error));
      setRes(VerifyStatus.failed);
    }
  };

  const handleValidation = async () => {
    if (!vc) return;
    await verify(vc);
  };
  return (
    <div
      className={` flex flex-col items-center gap-4 bg-[#D3DDC1] border-lime-900 border-[1px] md:px-12 px-4 md:py-10 py-6 max-w-[800px] w-full  rounded-2xl`}
    >
      <div
        className={` flex items-center justify-center  gap-2 text-xl md:text-3xl text-lime-900 border-lime-600 border-b-[1px] w-full pb-3 md:pb-6 px-3 font-semibold`}
      >
        <BsPatchCheckFill />
        <p>Open Credential Verifier</p>
      </div>
      <div className={` text-lime-950 text-xs md:text-sm`}>
        VC (Verifiable Credentials)
        を検証するツールです。VCのJSONデータをそのままコピー&ペーストしてください。
      </div>
      <Textarea
        className={` h-60`}
        value={vc}
        onChange={(e) => setVc(e.target.value)}
        placeholder={placeholderVC}
      />
      {res &&
        res !== VerifyStatus.waiting &&
        (res === VerifyStatus.failed ? (
          <div
            className={`flex items-center gap-2 text-lg text-rose-900 font-semibold`}
          >
            <BiSolidErrorAlt />
            <p>{res}</p>
          </div>
        ) : (
          <div
            className={`flex items-center gap-2 text-lg text-sky-900 font-semibold`}
          >
            <BsPatchCheckFill />
            <p>{res}</p>
          </div>
        ))}
      <Button
        className={
          vc
            ? `w-full bg-lime-800 transition-all rounded-xl hover:bg-lime-950`
            : `w-full opacity-40 pointer-events-none transition-all rounded-xl`
        }
        onClick={vc ? handleValidation : () => {}}
      >
        検証する
      </Button>
    </div>
  );
};
