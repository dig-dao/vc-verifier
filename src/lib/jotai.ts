import { VerifyStatus, VerifyStatusType } from "@/types";
import { atom, useAtom } from "jotai";

export const verifyStatus = atom<VerifyStatusType>(VerifyStatus.waiting);

export const useStateVerifyStatus = () => useAtom(verifyStatus);

export const errorText = atom<string>("");

export const useStatEerrorText = () => useAtom(errorText);
