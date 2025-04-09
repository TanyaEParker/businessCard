import { ZComponent, ContextManager, Observable, Animation, Layer, LayerClip, Event } from "@zcomponent/core";

import { CSS as CSS_0 } from "@zcomponent/html/lib/CSS";
import { Span as Span_1 } from "@zcomponent/html/lib/span";
import { Div as Div_2 } from "@zcomponent/html/lib/div";
import { H2 as H2_3 } from "@zcomponent/html/lib/headings";
import { H1 as H1_4 } from "@zcomponent/html/lib/headings";
import { Img as Img_5 } from "@zcomponent/html/lib/img";
import { HTML as HTML_6 } from "@zcomponent/three/lib/components/HTML";
import { TextToLink as TextToLink_7 } from "./TextToLink";
import { TextToLink as TextToLink_8 } from "./TextToLink";
import { Button as Button_9 } from "@zcomponent/html/lib/button";
import { hidePopUp as hidePopUp_10 } from "./hidePopUp";
import { LaunchURL as LaunchURL_11 } from "@zcomponent/core/lib/behaviors/LaunchURL";
import { toggleInstantTracking as toggleInstantTracking_12 } from "./toggleInstantTracking";
import { ConsoleLog as ConsoleLog_13 } from "@zcomponent/core/lib/behaviors/ConsoleLog";
import { toggleInstantTracking as toggleInstantTracking_14 } from "./toggleInstantTracking";

interface ConstructorProps {

}

/**
* @zcomponent
* @zicon zcomponent
*/
declare class Comp extends ZComponent {

	constructor(contextManager: ContextManager, constructorProps: ConstructorProps);

	nodes: {
		CSS: CSS_0 & {
			behaviors: {

			}
		},
		ContactNumber: Span_1 & {
			behaviors: {

			}
		},
		Copy: Span_1 & {
			behaviors: {

			}
		},
		Copy0: Span_1 & {
			behaviors: {

			}
		},
		Div: Div_2 & {
			behaviors: {

			}
		},
		Div_10: Div_2 & {
			behaviors: {

			}
		},
		Div_11: Div_2 & {
			behaviors: {

			}
		},
		Div_110: Div_2 & {
			behaviors: {

			}
		},
		Div_12: Div_2 & {
			behaviors: {

			}
		},
		Div_120: Div_2 & {
			behaviors: {

			}
		},
		Div_121: Div_2 & {
			behaviors: {

			}
		},
		Div_13: Div_2 & {
			behaviors: {

			}
		},
		Div_14: Div_2 & {
			behaviors: {

			}
		},
		Div_15: Div_2 & {
			behaviors: {

			}
		},
		Div_16: Div_2 & {
			behaviors: {

			}
		},
		Div_2: Div_2 & {
			behaviors: {

			}
		},
		Div_3: Div_2 & {
			behaviors: {

			}
		},
		Div_4: Div_2 & {
			behaviors: {

			}
		},
		Div_40: Div_2 & {
			behaviors: {

			}
		},
		Div_41: Div_2 & {
			behaviors: {

			}
		},
		Div_5: Div_2 & {
			behaviors: {

			}
		},
		Div_6: Div_2 & {
			behaviors: {

			}
		},
		Div_7: Div_2 & {
			behaviors: {

			}
		},
		H2: H2_3 & {
			behaviors: {

			}
		},
		H3: H2_3 & {
			behaviors: {

			}
		},
		H4: H2_3 & {
			behaviors: {

			}
		},
		H5: H2_3 & {
			behaviors: {

			}
		},
		H6: H2_3 & {
			behaviors: {

			}
		},
		H7: H2_3 & {
			behaviors: {

			}
		},
		Heading: H1_4 & {
			behaviors: {

			}
		},
		Hobbies: Div_2 & {
			behaviors: {

			}
		},
		Img: Img_5 & {
			behaviors: {

			}
		},
		Img_2: Img_5 & {
			behaviors: {

			}
		},
		Job_Title: Span_1 & {
			behaviors: {

			}
		},
		Location_Duration: Span_1 & {
			behaviors: {

			}
		},
		Other_Experience: Div_2 & {
			behaviors: {

			}
		},
		Popup: HTML_6 & {
			behaviors: {

			}
		},
		PortfolioLink: Span_1 & {
			behaviors: {
				0: TextToLink_7,
				TextToLink: TextToLink_7,
			}
		},
		Profile: Div_2 & {
			behaviors: {

			}
		},
		Qualifications: Div_2 & {
			behaviors: {

			}
		},
		Section_1: Div_2 & {
			behaviors: {

			}
		},
		Section_10: Div_2 & {
			behaviors: {

			}
		},
		Section_11: Div_2 & {
			behaviors: {

			}
		},
		Section_12: Div_2 & {
			behaviors: {

			}
		},
		Section_2: Div_2 & {
			behaviors: {

			}
		},
		Section_20: Div_2 & {
			behaviors: {

			}
		},
		Section_3: Div_2 & {
			behaviors: {

			}
		},
		Span: Span_1 & {
			behaviors: {
				0: TextToLink_8,
				TextToLink: TextToLink_8,
			}
		},
		Span_12: Span_1 & {
			behaviors: {

			}
		},
		Span_120: Span_1 & {
			behaviors: {

			}
		},
		Span_13: Span_1 & {
			behaviors: {

			}
		},
		Span_130: Span_1 & {
			behaviors: {

			}
		},
		Span_14: Span_1 & {
			behaviors: {

			}
		},
		Span_140: Span_1 & {
			behaviors: {

			}
		},
		Span_15: Span_1 & {
			behaviors: {

			}
		},
		Span_16: Span_1 & {
			behaviors: {

			}
		},
		Span_17: Span_1 & {
			behaviors: {

			}
		},
		Span_2: Span_1 & {
			behaviors: {
				0: TextToLink_8,
				TextToLink: TextToLink_8,
			}
		},
		Span_21: Span_1 & {
			behaviors: {
				0: TextToLink_8,
				TextToLink: TextToLink_8,
			}
		},
		Span_210: Span_1 & {
			behaviors: {

			}
		},
		Span_23: Span_1 & {
			behaviors: {

			}
		},
		Span_24: Span_1 & {
			behaviors: {
				0: TextToLink_8,
				TextToLink: TextToLink_8,
			}
		},
		Span_25: Span_1 & {
			behaviors: {

			}
		},
		Span_3: Span_1 & {
			behaviors: {

			}
		},
		Span_4: Span_1 & {
			behaviors: {

			}
		},
		Span_40: Span_1 & {
			behaviors: {

			}
		},
		Span_5: Span_1 & {
			behaviors: {

			}
		},
		Span_50: Span_1 & {
			behaviors: {

			}
		},
		Span_6: Span_1 & {
			behaviors: {

			}
		},
		Span_7: Span_1 & {
			behaviors: {

			}
		},
		Span_8: Span_1 & {
			behaviors: {

			}
		},
		Span_9: Span_1 & {
			behaviors: {

			}
		},
		Technical_Skills: Div_2 & {
			behaviors: {

			}
		},
		Top_Copy: Div_2 & {
			behaviors: {

			}
		},
		WorkHistoryTitle: Div_2 & {
			behaviors: {

			}
		},
		Work_History: Div_2 & {
			behaviors: {

			}
		},
		Wrapper: Div_2 & {
			behaviors: {

			}
		},
		Zappar: Span_1 & {
			behaviors: {

			}
		},
		backing: Div_2 & {
			behaviors: {

			}
		},
		bottom_bar: HTML_6 & {
			behaviors: {

			}
		},
		email: Span_1 & {
			behaviors: {

			}
		},
		emailLink: Span_1 & {
			behaviors: {
				0: TextToLink_8,
				TextToLink: TextToLink_8,
			}
		},
		exit: Button_9 & {
			behaviors: {
				0: hidePopUp_10,
				hidePopUp: hidePopUp_10,
			}
		},
		get_yourown: Div_2 & {
			behaviors: {
				0: LaunchURL_11,
				LaunchURL: LaunchURL_11,
			}
		},
		left0: Div_2 & {
			behaviors: {

			}
		},
		line1: Span_1 & {
			behaviors: {

			}
		},
		line2: Span_1 & {
			behaviors: {

			}
		},
		placementButton: Button_9 & {
			behaviors: {
				0: toggleInstantTracking_12,
				toggleInstantTracking: toggleInstantTracking_12,
				1: ConsoleLog_13,
				ConsoleLog: ConsoleLog_13,
			}
		},
		placementIcon: Img_5 & {
			behaviors: {

			}
		},
		resetButton: Button_9 & {
			behaviors: {
				0: toggleInstantTracking_14,
				toggleInstantTracking: toggleInstantTracking_14,
				1: ConsoleLog_13,
				ConsoleLog: ConsoleLog_13,
			}
		},
		resetcon: Img_5 & {
			behaviors: {

			}
		},
		right0: Div_2 & {
			behaviors: {

			}
		},
		top_Wrapper: Div_2 & {
			behaviors: {

			}
		},
		top_bar: HTML_6 & {
			behaviors: {

			}
		},
	};

	animation: Animation & { layers: {
		TrackingUI: Layer & { clips: {
			placement0: LayerClip;
			reset0: LayerClip;
			popup0: LayerClip;
		}};
	}};

	/**
	 * The position, in 3D space, of this node relative to its parent. The three elements of the array correspond to the `x`, `y`, and `z` components of position.
	 * 
	 * @zprop
	 * @zdefault [0,0,0]
	 * @zgroup Transform
	 * @zgrouppriority 10
	 */
	public position: Observable<[x: number, y: number, z: number]>;

	/**
	 * The rotation, in three dimensions, of this node relative to its parent. The three elements of the array correspond to Euler angles - yaw, pitch and roll.
	 * 
	 * @zprop
	 * @zdefault [0,0,0]
	 * @zgroup Transform
	 * @zgrouppriority 10
	 */
	public rotation: Observable<[x: number, y: number, z: number]>;

	/**
	 * The scale, in three dimensions, of this node relative to its parent. The three elements of the array correspond to scales in the the `x`, `y`, and `z` axis.
	 * 
	 * @zprop
	 * @zdefault [1,1,1]
	 * @zgroup Transform
	 * @zgrouppriority 10
	 */
	public scale: Observable<[x: number, y: number, z: number]>;

	/**
	 * Determines if this object and its children are rendered to the screen.
	 * 
	 * @zprop
	 * @zdefault true
	 * @zgroup Appearance
	 * @zgrouppriority 11
	 */
	public visible: Observable<boolean>;
}

export default Comp;
