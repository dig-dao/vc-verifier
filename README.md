# vc-verifier

## Getting Started

```bash
pnpm install
pnpm dev
```

## Sample

### Success Sample

copy & paste below.

```
{
  "@context": "https://www.w3.org/2018/credentials/v1",
  "id": "urn:uuid:86a109aa-a3f6-4374-b46f-92c58fcb16a1",
  "type": [
    "VerifiableCredential"
  ],
  "credentialSubject": {
    "id": "did:example:my-data-subject-identifier"
  },
  "issuer": "did:key:z6Mkv2hGUtUdKdEVdqc7esowafyriuqPvxQFnVTrRqjMknj2",
  "issuanceDate": "2023-01-08T18:23:56Z",
  "proof": {
    "type": "Ed25519Signature2018",
    "proofPurpose": "assertionMethod",
    "verificationMethod": "did:key:z6Mkv2hGUtUdKdEVdqc7esowafyriuqPvxQFnVTrRqjMknj2#z6Mkv2hGUtUdKdEVdqc7esowafyriuqPvxQFnVTrRqjMknj2",
    "created": "2023-01-08T07:43:50.818Z",
    "jws": "eyJhbGciOiJFZERTQSIsImNyaXQiOlsiYjY0Il0sImI2NCI6ZmFsc2V9..jyR9O8nb-ino0TXSCAhUdP2Z9iBc0E-aX7tyTHcFuOzOGd_uWpwHhA4gTOX961SUHB0un34e2YV41qc2lk0nCw"
  }
}
```

### Failed Sample

copy & paste below.

```
{
  "@context": "https://www.w3.org/2018/credentials/v1",
  "id": "urn:uuid:86a109aa-a3f6-4374-b46f-92c58fcb16a1",
  "type": [
    "VerifiableCredential"
  ],
  "credentialSubject": {
    "id": "did:example:my-data-subject-identifier"
  },
  "issuer": "did:key:z6Mkv2hGUtUdKdEVdqc7esowafyriuqPvxQFnVTrRqjMknj2",
  "issuanceDate": "2023-01-08T18:23:56Z",
  "proof": {
    "type": "Ed25519Signature2018",
    "proofPurpose": "assertionMethod",
    "verificationMethod": "did:key:z6Mkv2hGUtUdKdEVdqc7esowafyriuqPvxQFnVTrRqjMknj2#z6Mkv2hGUtUdKdEVdqc7esowafyriuqPvxQFnVTrRqjMknj",
    "created": "2023-01-08T07:43:50.818Z",
    "jws": "eyJhbGciOiJFZERTQSIsImNyaXQiOlsiYjY0Il0sImI2NCI6ZmFsc2V9..jyR9O8nb-ino0TXSCAhUdP2Z9iBc0E-aX7tyTHcFuOzOGd_uWpwHhA4gTOX961SUHB0un34e2YV41qc2lk0nCw"
  }
}
```
