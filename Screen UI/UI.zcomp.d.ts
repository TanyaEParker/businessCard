import { ZComponent, ContextManager, Observable, Animation, Layer, LayerClip, Event } from "@zcomponent/core";

import { Div as Div_0 } from "@zcomponent/html/lib/div";
import { HTML as HTML_1 } from "@zcomponent/three/lib/components/HTML";
import { Button as Button_2 } from "@zcomponent/html/lib/button";
import { toggleInstantTracking as toggleInstantTracking_3 } from "./toggleInstantTracking";
import { Img as Img_4 } from "@zcomponent/html/lib/img";
import { toggleInstantTracking as toggleInstantTracking_5 } from "./toggleInstantTracking";
import { CSS as CSS_6 } from "@zcomponent/html/lib/CSS";
import { Span as Span_7 } from "@zcomponent/html/lib/span";
import { H1 as H1_8 } from "@zcomponent/html/lib/headings";
import { H2 as H2_9 } from "@zcomponent/html/lib/headings";
import { hidePopUp as hidePopUp_10 } from "./hidePopUp";

interface ConstructorProps {

}

/**
* @zcomponent
* @zicon zcomponent
*/
declare class Comp extends ZComponent {

	constructor(contextManager: ContextManager, constructorProps: ConstructorProps);

	nodes: {
		Wrapper: Div_0 & {
			behaviors: {

			}
		},
		bottom_bar: HTML_1 & {
			behaviors: {

			}
		},
		placementButton: Button_2 & {
			behaviors: {
				0: toggleInstantTracking_3,
				toggleInstantTracking: toggleInstantTracking_3,
			}
		},
		placementIcon: Img_4 & {
			behaviors: {

			}
		},
		resetButton: Button_2 & {
			behaviors: {
				0: toggleInstantTracking_5,
				toggleInstantTracking: toggleInstantTracking_5,
			}
		},
		resetcon: Img_4 & {
			behaviors: {

			}
		},
		top_Wrapper: Div_0 & {
			behaviors: {

			}
		},
		top_bar: HTML_1 & {
			behaviors: {

			}
		},
		CSS: CSS_6 & {
			behaviors: {

			}
		},
		Popup: HTML_1 & {
			behaviors: {

			}
		},
		Top_Copy: Div_0 & {
			behaviors: {

			}
		},
		PortfolioLink: Span_7 & {
			behaviors: {

			}
		},
		line1: Span_7 & {
			behaviors: {

			}
		},
		line2: Span_7 & {
			behaviors: {

			}
		},
		email: Span_7 & {
			behaviors: {

			}
		},
		emailLink: Span_7 & {
			behaviors: {

			}
		},
		ContactNumber: Span_7 & {
			behaviors: {

			}
		},
		Span: Span_7 & {
			behaviors: {

			}
		},
		backing: Div_0 & {
			behaviors: {

			}
		},
		Heading: H1_8 & {
			behaviors: {

			}
		},
		Profile: Div_0 & {
			behaviors: {

			}
		},
		H2: H2_9 & {
			behaviors: {

			}
		},
		Copy: Span_7 & {
			behaviors: {

			}
		},
		Work_History: Div_0 & {
			behaviors: {

			}
		},
		H3: H2_9 & {
			behaviors: {

			}
		},
		WorkHistoryTitle: Div_0 & {
			behaviors: {

			}
		},
		left0: Div_0 & {
			behaviors: {

			}
		},
		right0: Div_0 & {
			behaviors: {

			}
		},
		Zappar: Span_7 & {
			behaviors: {

			}
		},
		Section_1: Div_0 & {
			behaviors: {

			}
		},
		Span_2: Span_7 & {
			behaviors: {

			}
		},
		Job_Title: Span_7 & {
			behaviors: {

			}
		},
		Location_Duration: Span_7 & {
			behaviors: {

			}
		},
		Copy0: Span_7 & {
			behaviors: {

			}
		},
		Technical_Skills: Div_0 & {
			behaviors: {

			}
		},
		Div: Div_0 & {
			behaviors: {

			}
		},
		H4: H2_9 & {
			behaviors: {

			}
		},
		Div_2: Div_0 & {
			behaviors: {

			}
		},
		Div_3: Div_0 & {
			behaviors: {

			}
		},
		Hobbies: Div_0 & {
			behaviors: {

			}
		},
		H5: H2_9 & {
			behaviors: {

			}
		},
		Span_3: Span_7 & {
			behaviors: {

			}
		},
		Qualifications: Div_0 & {
			behaviors: {

			}
		},
		Section_10: Div_0 & {
			behaviors: {

			}
		},
		Div_4: Div_0 & {
			behaviors: {

			}
		},
		H6: H2_9 & {
			behaviors: {

			}
		},
		Div_40: Div_0 & {
			behaviors: {

			}
		},
		Span_40: Span_7 & {
			behaviors: {

			}
		},
		Span_50: Span_7 & {
			behaviors: {

			}
		},
		Section_11: Div_0 & {
			behaviors: {

			}
		},
		Div_5: Div_0 & {
			behaviors: {

			}
		},
		Span_6: Span_7 & {
			behaviors: {

			}
		},
		Span_7: Span_7 & {
			behaviors: {

			}
		},
		Div_41: Div_0 & {
			behaviors: {

			}
		},
		Section_2: Div_0 & {
			behaviors: {

			}
		},
		Div_6: Div_0 & {
			behaviors: {

			}
		},
		Span_8: Span_7 & {
			behaviors: {

			}
		},
		Span_9: Span_7 & {
			behaviors: {

			}
		},
		Div_7: Div_0 & {
			behaviors: {

			}
		},
		Span_4: Span_7 & {
			behaviors: {

			}
		},
		Span_5: Span_7 & {
			behaviors: {

			}
		},
		Other_Experience: Div_0 & {
			behaviors: {

			}
		},
		Section_12: Div_0 & {
			behaviors: {

			}
		},
		Div_11: Div_0 & {
			behaviors: {

			}
		},
		Div_12: Div_0 & {
			behaviors: {

			}
		},
		Div_120: Div_0 & {
			behaviors: {

			}
		},
		H7: H2_9 & {
			behaviors: {

			}
		},
		Span_12: Span_7 & {
			behaviors: {

			}
		},
		Span_13: Span_7 & {
			behaviors: {

			}
		},
		Span_14: Span_7 & {
			behaviors: {

			}
		},
		Div_110: Div_0 & {
			behaviors: {

			}
		},
		Div_121: Div_0 & {
			behaviors: {

			}
		},
		Div_13: Div_0 & {
			behaviors: {

			}
		},
		Span_120: Span_7 & {
			behaviors: {

			}
		},
		Span_130: Span_7 & {
			behaviors: {

			}
		},
		Span_140: Span_7 & {
			behaviors: {

			}
		},
		Section_20: Div_0 & {
			behaviors: {

			}
		},
		Div_14: Div_0 & {
			behaviors: {

			}
		},
		Div_15: Div_0 & {
			behaviors: {

			}
		},
		Div_16: Div_0 & {
			behaviors: {

			}
		},
		Span_15: Span_7 & {
			behaviors: {

			}
		},
		Span_16: Span_7 & {
			behaviors: {

			}
		},
		Span_17: Span_7 & {
			behaviors: {

			}
		},
		Section_3: Div_0 & {
			behaviors: {

			}
		},
		Span_21: Span_7 & {
			behaviors: {

			}
		},
		Span_210: Span_7 & {
			behaviors: {

			}
		},
		Span_23: Span_7 & {
			behaviors: {

			}
		},
		Span_24: Span_7 & {
			behaviors: {

			}
		},
		Div_10: Div_0 & {
			behaviors: {

			}
		},
		exit: Button_2 & {
			behaviors: {
				0: hidePopUp_10,
				hidePopUp: hidePopUp_10,
			}
		},
		Img: Img_4 & {
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
