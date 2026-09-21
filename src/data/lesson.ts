export type LessonStep = {
  title: string;
  description: string;
  image?: string;
};

export type LessonResource = {
  title: string;
  description: string;
  url: string;
  type: "official" | "youtube" | "link";
};

export type Lesson = {
  id: string;
  title: string;
  time: string;
  description: string;

  ownVideo?: string;
  youtubeVideo?: string;

  steps: LessonStep[];

  resources?: LessonResource[];

  practice?: {
    title: string;
    description: string;
  };
};

export type Chapter = {
  id: string;
  title: string;
  name: string;
  description: string;
  lessons: Lesson[];
};

export const chapters: Chapter[] = [
  {
    id: "chapter-1",
    title: "Chapter 1",
    name: "Computer Basics",
    description: "Learn the basic skills needed to use a computer.",
    lessons: [
      {
        id: "c1l1",
        title: "What is a Computer?",
        time: "5 min",
        description:
          "A computer is an electronic machine that helps us write, store information, communicate with people, and use the internet.",

        youtubeVideo: "https://www.youtube.com/watch?v=Cu3R5it4cQs&pp=ygUQd2hhdCBpcyBjb21wdXRlcg%3D%3D",

        steps: [
          {
            title: "Know the main parts",
            description:
              "A desktop computer usually has a monitor, keyboard, mouse, and computer box. A laptop has these parts together in one device.",
            image:
              "https://placehold.co/900x500/eef2ff/4f46e5?text=Computer+Parts",
          },
          {
            title: "The monitor",
            description:
              "The monitor is the screen. It shows you pictures, text, buttons, and everything you are doing on the computer.",
            image:
              "https://placehold.co/900x500/f5f3ff/7c3aed?text=Monitor",
          },
          {
            title: "The keyboard and mouse",
            description:
              "The keyboard is used for typing. The mouse is used for moving the pointer, selecting things, and opening items.",
            image:
              "https://placehold.co/900x500/f0fdfa/0f766e?text=Keyboard+%26+Mouse",
          },
        ],

        resources: [
          {
            title: "Computer Basics",
            description: "Learn more about basic computer skills.",
            url: "#",
            type: "official",
          },
          {
            title: "Beginner Computer Video",
            description: "Watch another simple explanation.",
            url: "#",
            type: "youtube",
          },
        ],

        practice: {
          title: "Try it yourself",
          description:
            "Look at your computer and try to identify the monitor, keyboard, mouse, and other parts.",
        },
      },

      {
        id: "c1l2",
        title: "Using the Mouse",
        time: "8 min",
        description:
          "Learn how to move the mouse, click, double-click, right-click, and scroll.",

        steps: [
          {
            title: "Move the mouse",
            description:
              "Move your mouse slowly on the table. Watch the small pointer move on your screen.",
            image:
              "https://placehold.co/900x500/eef2ff/4f46e5?text=Move+the+Mouse",
          },
          {
            title: "Left click",
            description:
              "Press the left mouse button once. This is normally used to select something.",
            image:
              "https://placehold.co/900x500/f5f3ff/7c3aed?text=Left+Click",
          },
          {
            title: "Double click",
            description:
              "Press the left mouse button two times quickly. Double-clicking is commonly used to open files and applications.",
            image:
              "https://placehold.co/900x500/f0fdfa/0f766e?text=Double+Click",
          },
          {
            title: "Scroll",
            description:
              "Move the wheel in the middle of the mouse up or down to move through a long page.",
            image:
              "https://placehold.co/900x500/fff7ed/c2410c?text=Scroll",
          },
        ],

        resources: [
          {
            title: "Mouse Practice Guide",
            description: "A simple guide for practicing mouse actions.",
            url: "#",
            type: "link",
          },
        ],

        practice: {
          title: "Mouse practice",
          description:
            "Open any folder on your computer. Try clicking, double-clicking, and scrolling.",
        },
      },

      {
        id: "c1l3",
        title: "Using the Keyboard",
        time: "10 min",
        description:
          "Learn the most useful keyboard keys and how to type simple information.",

        steps: [
          {
            title: "Find the letter keys",
            description:
              "The main part of the keyboard contains letters from A to Z. Use these keys to type words.",
            image:
              "https://placehold.co/900x500/eef2ff/4f46e5?text=Keyboard+Letters",
          },
          {
            title: "Use the Space key",
            description:
              "The long key at the bottom of the keyboard is the Space key. Press it to create a space between words.",
            image:
              "https://placehold.co/900x500/f5f3ff/7c3aed?text=Space+Key",
          },
          {
            title: "Use Enter",
            description:
              "Press Enter to move to a new line or confirm an action.",
            image:
              "https://placehold.co/900x500/f0fdfa/0f766e?text=Enter+Key",
          },
          {
            title: "Use Backspace",
            description:
              "Backspace removes the character before the typing cursor.",
            image:
              "https://placehold.co/900x500/fff7ed/c2410c?text=Backspace",
          },
        ],

        practice: {
          title: "Typing practice",
          description:
            "Open a text editor and type your name, your organisation name, and today's date.",
        },
      },

      {
        id: "c1l4",
        title: "Files and Folders",
        time: "12 min",
        description:
          "Learn how to create folders and keep your documents organized.",

        steps: [
          {
            title: "Open File Explorer",
            description:
              "File Explorer allows you to see and manage files and folders on your computer.",
            image:
              "https://placehold.co/900x500/eef2ff/4f46e5?text=File+Explorer",
          },
          {
            title: "Create a folder",
            description:
              "Right-click in an empty area, choose New, and then choose Folder. Give the folder a clear name.",
            image:
              "https://placehold.co/900x500/f5f3ff/7c3aed?text=Create+Folder",
          },
          {
            title: "Give your folder a useful name",
            description:
              "Instead of names like New Folder, use names that tell you what is inside. For example: Office Documents.",
            image:
              "https://placehold.co/900x500/f0fdfa/0f766e?text=Useful+Folder+Names",
          },
        ],

        practice: {
          title: "Create your first folder",
          description:
            "Create a folder called My Documents and create another folder inside it called Work.",
        },
      },
    ],
  },

  {
    id: "chapter-2",
    title: "Chapter 2",
    name: "Email & Gmail",
    description: "Learn how to send messages and documents using email.",
    lessons: [
      {
        id: "c2l1",
        title: "What is Email?",
        time: "5 min",
        description:
          "Email is a simple way to send and receive messages, documents, photos, and other information through the internet.",

        steps: [
          {
            title: "Think of email like a digital letter",
            description:
              "Instead of sending a paper letter, you can type a message on a computer or phone and send it through the internet.",
            image:
              "https://placehold.co/900x500/eef2ff/4f46e5?text=Digital+Email",
          },
          {
            title: "You need an email address",
            description:
              "An email address identifies where your message should go. For example: person@example.com.",
            image:
              "https://placehold.co/900x500/f5f3ff/7c3aed?text=Email+Address",
          },
          {
            title: "You can send documents",
            description:
              "Email can also be used to send documents, photos, PDFs, and other files.",
            image:
              "https://placehold.co/900x500/f0fdfa/0f766e?text=Email+Attachments",
          },
        ],

        resources: [
          {
            title: "Gmail Help",
            description: "Learn more about using Gmail.",
            url: "#",
            type: "official",
          },
        ],

        practice: {
          title: "Think about an email",
          description:
            "Write down the email address of someone you communicate with regularly.",
        },
      },

      {
        id: "c2l2",
        title: "How to Send an Email",
        time: "8 min",
        description:
          "Learn how to create a new email, write a message, and send it.",

        steps: [
          {
            title: "Open Gmail",
            description:
              "Open Gmail in your web browser and sign in to your account.",
            image:
              "https://placehold.co/900x500/eef2ff/4f46e5?text=Open+Gmail",
          },
          {
            title: "Click Compose",
            description:
              "Click the Compose button to start writing a new email.",
            image:
              "https://placehold.co/900x500/f5f3ff/7c3aed?text=Compose",
          },
          {
            title: "Enter the recipient",
            description:
              "Type the email address of the person you want to contact in the To field.",
            image:
              "https://placehold.co/900x500/f0fdfa/0f766e?text=Recipient",
          },
          {
            title: "Write and send",
            description:
              "Write your message, check it carefully, and click Send.",
            image:
              "https://placehold.co/900x500/fff7ed/c2410c?text=Write+and+Send",
          },
        ],

        practice: {
          title: "Practice writing an email",
          description:
            "Create a new email and write a short message saying hello. You do not need to send it.",
        },
      },

      {
        id: "c2l3",
        title: "Sending Documents",
        time: "10 min",
        description:
          "Learn how to attach a document or photo to an email.",

        steps: [
          {
            title: "Start a new email",
            description:
              "Click Compose and enter the email address of the person you want to send the document to.",
            image:
              "https://placehold.co/900x500/eef2ff/4f46e5?text=New+Email",
          },
          {
            title: "Click the attachment button",
            description:
              "Look for the paperclip icon at the bottom of the email window.",
            image:
              "https://placehold.co/900x500/f5f3ff/7c3aed?text=Attachment+Button",
          },
          {
            title: "Choose your file",
            description:
              "Find the document or photo on your computer and select it.",
            image:
              "https://placehold.co/900x500/f0fdfa/0f766e?text=Choose+File",
          },
          {
            title: "Send the email",
            description:
              "Wait until the file finishes uploading, then click Send.",
            image:
              "https://placehold.co/900x500/fff7ed/c2410c?text=Send+Attachment",
          },
        ],

        practice: {
          title: "Attach a document",
          description:
            "Create an email and attach a small document. Check that the file appears before sending.",
        },
      },
    ],
  },

  {
    id: "chapter-3",
    title: "Chapter 3",
    name: "Google Drive",
    description: "Learn how to store and organize files online.",
    lessons: [
      {
        id: "c3l1",
        title: "What is Google Drive?",
        time: "7 min",
        description:
          "Google Drive is an online storage service where you can save files and access them from different devices.",

        steps: [
          {
            title: "Open Google Drive",
            description:
              "Open your web browser and go to Google Drive. Sign in using your Google account.",
            image:
              "https://placehold.co/900x500/eef2ff/4f46e5?text=Google+Drive",
          },
          {
            title: "Understand your files",
            description:
              "The main Drive screen shows the files and folders stored in your account.",
            image:
              "https://placehold.co/900x500/f5f3ff/7c3aed?text=Your+Files",
          },
          {
            title: "Access files from different devices",
            description:
              "Files saved in Drive can be accessed from another computer or phone when you sign in to the same account.",
            image:
              "https://placehold.co/900x500/f0fdfa/0f766e?text=Access+Anywhere",
          },
        ],

        resources: [
          {
            title: "Google Drive Help",
            description: "Learn more about Google Drive.",
            url: "#",
            type: "official",
          },
        ],

        practice: {
          title: "Open your Drive",
          description:
            "Open Google Drive and look at the files and folders you already have.",
        },
      },

      {
        id: "c3l2",
        title: "Creating Folders",
        time: "6 min",
        description:
          "Learn how to create folders in Google Drive to keep your files organized.",

        steps: [
          {
            title: "Click New",
            description:
              "On the left side of Google Drive, click the New button.",
            image:
              "https://placehold.co/900x500/eef2ff/4f46e5?text=New+Button",
          },
          {
            title: "Choose Folder",
            description:
              "Select Folder from the menu that appears.",
            image:
              "https://placehold.co/900x500/f5f3ff/7c3aed?text=New+Folder",
          },
          {
            title: "Name your folder",
            description:
              "Give your folder a clear name such as Reports, Photos, or Project Documents.",
            image:
              "https://placehold.co/900x500/f0fdfa/0f766e?text=Folder+Name",
          },
        ],

        practice: {
          title: "Create a folder",
          description:
            "Create a folder in Google Drive called Practice Documents.",
        },
      },

      {
        id: "c3l3",
        title: "Sharing a File",
        time: "8 min",
        description:
          "Learn how to share a Google Drive file with another person.",

        steps: [
          {
            title: "Find your file",
            description:
              "Find the document or folder that you want to share.",
            image:
              "https://placehold.co/900x500/eef2ff/4f46e5?text=Find+Your+File",
          },
          {
            title: "Open the Share option",
            description:
              "Right-click the file and choose Share.",
            image:
              "https://placehold.co/900x500/f5f3ff/7c3aed?text=Share",
          },
          {
            title: "Enter the person's email",
            description:
              "Type the email address of the person you want to share the file with.",
            image:
              "https://placehold.co/900x500/f0fdfa/0f766e?text=Enter+Email",
          },
          {
            title: "Choose their access",
            description:
              "Choose whether the person can only view the file, comment on it, or edit it.",
            image:
              "https://placehold.co/900x500/fff7ed/c2410c?text=Choose+Access",
          },
        ],

        practice: {
          title: "Practice sharing",
          description:
            "Choose a practice document and share it with someone you trust.",
        },
      },
    ],
  },

  {
    id: "chapter-4",
    title: "Chapter 4",
    name: "Microsoft Word",
    description: "Learn the basics of creating and editing documents.",
    lessons: [
      {
        id: "c4l1",
        title: "Getting Started with Word",
        time: "8 min",
        description:
          "Learn how Microsoft Word can help you create letters, reports, applications, and other documents.",

        steps: [
          {
            title: "Open Microsoft Word",
            description:
              "Open Microsoft Word from the Start menu or from your computer.",
            image:
              "https://placehold.co/900x500/eef2ff/4f46e5?text=Microsoft+Word",
          },
          {
            title: "Create a blank document",
            description:
              "Choose Blank document to start writing from an empty page.",
            image:
              "https://placehold.co/900x500/f5f3ff/7c3aed?text=Blank+Document",
          },
          {
            title: "Start typing",
            description:
              "Click inside the document and begin typing your text.",
            image:
              "https://placehold.co/900x500/f0fdfa/0f766e?text=Start+Typing",
          },
        ],

        practice: {
          title: "Create a simple document",
          description:
            "Create a new document and write your name, organisation name, and three sentences about your work.",
        },
      },

      {
        id: "c4l2",
        title: "Formatting Text",
        time: "10 min",
        description:
          "Learn how to make text bold, change its size, and organize your document.",

        steps: [
          {
            title: "Select your text",
            description:
              "Use your mouse to select the words you want to change.",
            image:
              "https://placehold.co/900x500/eef2ff/4f46e5?text=Select+Text",
          },
          {
            title: "Make text bold",
            description:
              "Click the B button to make selected text bold.",
            image:
              "https://placehold.co/900x500/f5f3ff/7c3aed?text=Bold+Text",
          },
          {
            title: "Change text size",
            description:
              "Choose a different font size from the font-size menu.",
            image:
              "https://placehold.co/900x500/f0fdfa/0f766e?text=Font+Size",
          },
        ],

        practice: {
          title: "Format a document",
          description:
            "Write a title and two sentences. Make the title bold and larger than the other text.",
        },
      },
    ],
  },
];
