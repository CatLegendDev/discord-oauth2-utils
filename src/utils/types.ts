export type Scope =
  | "activities.read"
  | "activities.write"
  | "applications.builds.upload"
  | "applications.builds.read"
  | "applications.commands"
  | "applications.commands.update"
  | "applications.commands.permissions.update"
  | "applications.entitlements"
  | "applications.store.update"
  | "bot"
  | "connections"
  | "dm_channels.read"
  | "email"
  | "gdm.join"
  | "guilds"
  | "guilds.join"
  | "guilds.members.read"
  | "identify"
  | "messages.read"
  | "relationships.read"
  | "role_connections.write"
  | "rpc"
  | "rpc.activities.write"
  | "rpc.notifications.read"
  | "rpc.voice.read"
  | "rpc.voice.write"
  | "voice"
  | "webhook.incoming";

export type Grant = "authorization_code" | "refresh_token";
