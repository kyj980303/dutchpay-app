import { atom } from "recoil";

export const createDuchPayState = atom({
  key: "createDuchPayFormData",
  default: undefined,
});

export const groupMemberState = atom({
  key: "groupMembers",
  default: [],
});
