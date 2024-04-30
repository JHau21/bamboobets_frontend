import { color_palette, shadow_palette, text_shadow_palette } from "./colors";

import {
	NavItemProps,
	PlatformOption,
	SpaceTrailMenuOption,
	SpaceTrailOptions,
} from "../types/common";

import EngineersImage from "../assets/images/space_trail/engineers_image.png";
import EyesImage from "../assets/images/space_trail/eyes_image.png";
import FourthChoice from "../assets/images/space_trail/fourth_choice.png";
import FirstChoice from "../assets/images/space_trail/first_choice.png";
import IntercomImage from "../assets/images/space_trail/intercom_image.png";
import IntroImage from "../assets/images/space_trail/intro_image.png";
import PanicImage from "../assets/images/space_trail/panic_image.png";
import SecondChoice from "../assets/images/space_trail/second_choice.png";
import SpaceTrailDefault from "../assets/images/icons/space-trail-default.svg";
import SpaceTrailHoverActive from "../assets/images/icons/space-trail-hover-active.svg";
import ThirdChoice from "../assets/images/space_trail/third_choice.png";

import FirstChoiceFail from "../assets/images/space_trail/first_choice_fail.png";
import FirstChoiceSuccess from "../assets/images/space_trail/first_choice_success.png";
import FourthChoiceFail from "../assets/images/space_trail/fourth_choice_fail.png";
import FourthChoiceSuccess from "../assets/images/space_trail/fourth_choice_success.png";
import SecondChoiceFail from "../assets/images/space_trail/second_choice_fail.png";
import SecondChoiceSuccess from "../assets/images/space_trail/second_choice_success.png";
import ThirdChoiceFail from "../assets/images/space_trail/third_choice_fail.png";
import ThirdChoiceSuccess from "../assets/images/space_trail/third_choice_success.png";

type StoryComponent = { story_line: string; story_image: string };

export const exclusive_menu_items: Array<NavItemProps> = [
	{
		title: "Space Trail",
		color: color_palette["light-blue"],
		url: "/exclusive/space_trail",
		shadow: shadow_palette["blue-menu-item-glow"],
		text_shadow: text_shadow_palette["blue-glow"],
	},
];

export const exclusive_game_cards: Array<PlatformOption> = [
	{
		title: "Space Trail",
		img_src_default: SpaceTrailDefault,
		img_src_hover: SpaceTrailHoverActive,
		url: "/exclusive/space_trail",
		color: color_palette["light-blue"],
		shadow: shadow_palette["blue-card-glow"],
		text_shadow: text_shadow_palette["blue-glow"],
	},
];

export const space_trail_menu: Array<SpaceTrailMenuOption> = [
	{
		title: "Collaborate to fix it",
		probability: "90%",
		payout: "1.11x",
		default_style:
			"w-full h-[45px] my-2 hover:cursor-pointer rounded-lg p-2 border-2 hover:border-light-yellow hover:shadow-yellow-menu-item-glow border-transparent hover:text-light-yellow text-bbb-white",
		hover_active_style:
			"w-full h-[45px] my-2 hover:cursor-pointer rounded-lg p-2 border-2 border-bbb-white",
		value: SpaceTrailOptions.Collaborate,
	},
	{
		title: "Fix it yourself",
		probability: "70%",
		payout: "1.42x",
		default_style:
			"w-full h-[45px] my-2 hover:cursor-pointer rounded-lg p-2 border-2 hover:border-light-green hover:shadow-green-menu-item-glow border-transparent hover:text-light-green text-bbb-white",
		hover_active_style:
			"w-full h-[45px] my-2 hover:cursor-pointer rounded-lg p-2 border-2 border-bbb-white",
		value: SpaceTrailOptions.Fix,
	},
	{
		title: "Ignore it",
		probability: "30%",
		payout: "3.33x",
		default_style:
			"w-full h-[45px] my-2 hover:cursor-pointer rounded-lg p-2 border-2 hover:border-light-blue hover:shadow-blue-menu-item-glow border-transparent hover:text-light-blue text-bbb-white",
		hover_active_style:
			"w-full h-[45px] my-2 hover:cursor-pointer rounded-lg p-2 border-2 border-bbb-white",
		value: SpaceTrailOptions.Ignore,
	},
	{
		title: "Panic",
		probability: "10%",
		payout: "10x",
		default_style:
			"w-full h-[45px] my-2 hover:cursor-pointer rounded-lg p-2 border-2 hover:border-light-pink hover:shadow-pink-menu-item-glow border-transparent hover:text-light-pink text-bbb-white",
		hover_active_style:
			"w-full h-[45px] my-2 hover:cursor-pointer rounded-lg p-2 border-2 border-bbb-white",
		value: SpaceTrailOptions.Panic,
	},
];

export const story_block: Array<StoryComponent> = [
	{
		story_line:
			"As your spaceship swiftly ascends into Earth's upper atmosphere, you gaze out of the window, leaving your previous life far behind. The blue sky quickly darkens and, for the first time in your life, Earth becomes a remote and ever-distant place.",
		story_image: IntroImage,
	},
	{
		story_line:
			"Enveloped in the insulated silence of your room, your thoughts start to drift. You become lost in a vivid daydream about the boundless possibilities that await you. What will you do with all that space gold...",
		story_image: IntroImage,
	},
	{
		story_line:
			"Suddenly, the intercom in your room crackles, startling you out of the lucid trance. One of the ship's captains starts to speak...",
		story_image: IntercomImage,
	},
	{
		story_line:
			"'Hey uhhhhh - we've got a bit of a problem... one of our gauges is indicating a rapid loss of oxygen in the cabin. We need you in the cockpit ASAP...'",
		story_image: IntercomImage,
	},
	{
		story_line:
			"As the door to the cockpit swings open, the previously serene atmosphere shatters. You are immediately drawn to a solitary crew member huddled near the door, their shoulders shaking with quiet sobs. Further in, the cockpit is a scene of chaos: several crew members are embroiled in a heated debate, their voices rising in frustration and worry.",
		story_image: PanicImage,
	},
	{
		story_line:
			"Up front, two of the ship's engineers are hunched over the dashboard, which has been partially dismantled in a frantic effort to diagnose the issue. Tools and components are strewn about, evidence of their desperate attempts to resolve the crisis.",
		story_image: EngineersImage,
	},
	{
		story_line:
			"Within moments of you entering, several of the crew turn toward you. Their faces betray their composure; there is a clear panic in their eyes.",
		story_image: EyesImage,
	},
	{
		story_line:
			"One of the engineers looks to you and shouts, 'Everyone quiet! Head engineer on deck!' For a brief moment, the pandemonium ceases and all the eyes in the room turn to you. You suddenly feel an incredible tension as the silence in the room is filled only by your heart beat. What do you do?",
		story_image: EyesImage,
	},
];

export const outcome_block: { [key: number]: StoryComponent } = {
	1: {
		story_line:
			"Lingering awkwardly at the back of the cockpit for a few tense seconds, you glance around the room. With a deep breath to steady yourself, you turn your attention to the two engineers. In a firm, yet composed voice, you say, 'Alright, let's run some diagnostics and figure out what's happening here.'",
		story_image: FirstChoice,
	},
	2: {
		story_line:
			"Feeling a twinge of frustration at the panic in the room and the apparent incompetency of the engineers in the cockpit, you say, 'Well clearly you idiots can't fix this problem. I guess it's up to me then to clean up this mess!' Approaching the two engineers, you shout, 'Now get out of my way!'",
		story_image: SecondChoice,
	},
	3: {
		story_line:
			"After entering the room and seeing the panic, you come to a critical realization. You may not be fit to solve this problem and you don't want to be responsible for a failure to solve it. Thus, you look around the room and say, 'Clearly you guys have the situation under control.' You then proceed to turn around and exit the cockpit.",
		story_image: ThirdChoice,
	},
	4: {
		story_line:
			"The sunken feeling in your gut begins to overwhelm you. You look around the room for a bit without saying a word. The silence is unbearable. After a few seconds, you blurt out, 'We're all gonna die!' and proceed to have a mental breakdown in front of the entire crew.",
		story_image: FourthChoice,
	},
};

export const outcome_pictures: { [key: string]: string } = {
	"10": FirstChoiceFail,
	"11": FirstChoiceSuccess,
	"20": SecondChoiceFail,
	"21": SecondChoiceSuccess,
	"30": ThirdChoiceFail,
	"31": ThirdChoiceSuccess,
	"40": FourthChoiceFail,
	"41": FourthChoiceSuccess,
};
