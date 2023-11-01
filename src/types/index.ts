export type DidkitRes = {
  checks: string;
  warnings: string[];
  errors: string[];
};

export type DidkitProofOptions = {
  checks?: string[];
}

export const VerifyStatus = {
  success: "Successfully verified.",
  verifying: "Verifying...",
  failed: "Verification failed.",
  waiting: "Waiting for verification...",
} as const;

export type VerifyStatusType = (typeof VerifyStatus)[keyof typeof VerifyStatus];
