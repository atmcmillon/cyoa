import { StoryLine } from "../interfaces/StoryLine";

export const DarkRoom: StoryLine = {
  name: "A dark room",
  story: [
    {
      id: 0,
      message:
        "You find yourself in a dark room. The only item in your pocket is a set of keys.",
      options: [
        {
          message: "Ask if anyone else is in the room.",
          key: "A",
          next: 1
        },
        {
          message: "Yell for help.",
          key: "S",
          next: 2
        }
      ]
    },
    {
      id: 1,
      message: "There is no answer",
      options: [
        {
          message: "You're ok with this. You're not a people person, after all. You're a programmer and writer.",
          key: "A",
          next: 4
        },
        {
          message: "You wander around aimlessly, until someone grabs your shoulder. It's Shrek!",
          key: "S",
          next: 5
        }
      ]
    },
    {
      id: 2,
      message: "A faint voice responds, but you cannot make out the words...",
      options: [
        {
          message: "You go in the direction of the voice.",
          key: "A",
          next: 3
        },
        {
          message: "You stay where you are. This place seems comfy.",
          key: "S",
          next: 6
        }
      ]
    },
    {
      id: 3,
      message: "You keep walking until you bump into something. That something begins to glow, until you realize: it's Shrek!",
      options: [
        {
          message: "You go with him.",
          key: "S",
          next: 5
    }
    ]
    },
    {
      id: 4,
      message: "You sit down, close your eyes, and remember the sight of Visual Studio, to create your own adventure.",
      options: []
    },
    {
      id: 5,
      message: "Shrek smiles at you. 'My child, you can either escape, or allow me to give you the gift of creative writing.'",
      options: [
        {
          message: "You choose to escape. 'My child, you may do this, but only through the world of computers.",
          key: "A",
          next: 4
        },
        {
          message: "You choose to write. You've wanted to try to be creative, and this might be your chance.",
          key: "S",
          next: 4
        }
      ]
    },
    {
      id: 6,
      message: "'Boy, I can't wait to get some sleep in here. dreams are pleasant.'",
      options: [
        {
          message: "You fall asleep. You dream you're a programmer.",
          key: "S",
          next: 4
        }
      ]
    }
  ]
};
