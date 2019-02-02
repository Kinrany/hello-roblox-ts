import { Chat, Players } from 'rbx-services';

Players.PlayerAdded.Connect(player => {
  while (true) {
    wait(5);

    if (player.Character) {
      Chat.Chat(player.Character, `Hello world! I'm ${player.Name}!`);
    }
  }
});
