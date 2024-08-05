import { Text, YStack } from "@rise-tools/kitchen-sink/server";

export const models = {
  "": UI,
};

export function UI() {
  return (
    <YStack flex={1} alignItems="center" justifyContent="center">
      <Text className={"flex-1"}>turker0</Text>
    </YStack>
  );
}
