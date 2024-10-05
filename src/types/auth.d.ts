type SessionParams = {
  session: Session;
  token: JWT;
  user: AdapterUser;
} & {
  newSession: any;
  trigger: "update";
};
