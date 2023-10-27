import { createAgent, IResolver, ICredentialPlugin } from "@veramo/core";
import { CredentialPlugin } from "@veramo/credential-w3c";
import { DIDResolverPlugin } from "@veramo/did-resolver";
import { Resolver } from "did-resolver";
import { getResolver as pkhDidResolver } from "pkh-did-resolver";
import { getResolver as webDidResolver } from "web-did-resolver";
import { CredentialIssuerEIP712 } from "@veramo/credential-eip712";
import {
  CredentialIssuerLD,
  LdDefaultContexts,
  VeramoEcdsaSecp256k1RecoverySignature2020,
  VeramoEd25519Signature2018,
  VeramoEd25519Signature2020,
  VeramoJsonWebSignature2020,
} from "@veramo/credential-ld";

export const getAgent = () => {
  return createAgent<IResolver & ICredentialPlugin>({
    plugins: [
      new DIDResolverPlugin({
        resolver: new Resolver({
          ...pkhDidResolver(),
          ...webDidResolver(),
        }),
      }),
      new CredentialPlugin(),
      new CredentialIssuerEIP712(),
      new CredentialIssuerLD({
        contextMaps: [LdDefaultContexts],
        suites: [
          new VeramoEcdsaSecp256k1RecoverySignature2020(),
          new VeramoJsonWebSignature2020(),
          new VeramoEd25519Signature2020(),
          new VeramoEd25519Signature2018(),
        ],
      }),
    ],
  });
};
