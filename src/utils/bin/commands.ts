// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display summary.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  // window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. 
Welcome to my website!
More about me:
'sumfetch' - short summary.
'resume' - my latest resume.
'readme' - my github readme.`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

// Donate
export const donate = async (args: string[]): Promise<string> => {
  return `thank you for your interest. 
`;
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  // window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Searching duckduckgo for ${args.join(' ')}...`;
};

export const bing = async (args: string[]): Promise<string> => {
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  return `Wow, really? You are using bing for ${args.join(' ')}?`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `a
bunch
of
fake
directories`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `unfortunately, i cannot afford more directories.
if you want to help, you can type 'donate'.`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `woah, you still use 'vi'? just try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is so outdated. how about 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? too fancy. why not 'emacs'?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `you know what? just use vscode.`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
888'Y88 888                    d8                            ,e,              e88'Y88          dP,e,             
888 ,'Y 888  ,e e,   e88'888  d88   888,8,  e88 88e  888 8e   "   e88'888    d888  'Y  ,"Y88b  8b "   ,e e,      
888C8   888 d88 88b d888  '8 d88888 888 "  d888 888b 888 88b 888 d888  '8   C8888     "8" 888 888888 d88 88b     
888 ",d 888 888   , Y888   ,  888   888    Y888 888P 888 888 888 Y888   ,    Y888  ,d ,ee 888  888   888   ,     
888,d88 888  "YeeP"  "88,e8'  888   888     "88 88"  888 888 888  "88,e8'     "88,d88 "88 888  888    "YeeP"     
                                                                                                                 
                                                                                                                 
 dP,e,                    888           d8                                    d8         e Y8b              d8   
 8b "   e88 88e  888,8,   888 888 8e   d88    ,e e,  888,8, 888 8e   ,e e,   d88        d8b Y8b    888,8,  d88   
888888 d888 888b 888 "    888 888 88b d88888 d88 88b 888 "  888 88b d88 88b d88888     d888b Y8b   888 "  d88888 
 888   Y888 888P 888      888 888 888  888   888   , 888    888 888 888   ,  888      d888888888b  888     888   
 888    "88 88"  888      888 888 888  888    "YeeP" 888    888 888  "YeeP"  888     d8888888b Y8b 888     888   
                                                                                                                 
What:   Electronic Cafe for Internet Art
Where:  MacLean Building, Room 807
Where:  116 S Michigan Ave. Chicago IL 60601
When:   Thursday, Dec 14th, 15:30 - 17:30                                                                                                                 
Who:    Amelia Kim, Viv Adamian, Laen Chan, Mello, Yuwen Huang, Emmet Stephens, Nimrod Astarhan, Ahmed Balto, yiyi liu, Mina Crow, Izabella "Bella" Podowski
Expect: 

An end-of-year event by the Net Art && Cultures class showcasing creative, interactive, and community-based networked practices, websites, and artworks. The event traces the seminal 84' work by Kit Galloway and Sherrie Rabinowitz, Electronic Cafe Network. It borrows its primary value of integration and imagines an informed site for community, art, technology, and cross-cultural communications. 

`;
};
