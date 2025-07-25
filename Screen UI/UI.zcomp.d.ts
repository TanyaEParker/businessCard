import { ZComponent, ContextManager, Observable, Animation, Layer, LayerClip, Event } from "@zcomponent/core";

import { CSS as CSS_0 } from "@zcomponent/html/lib/CSS";
import { Img as Img_1 } from "@zcomponent/html/lib/img";
import { HTML as HTML_2 } from "@zcomponent/three/lib/components/HTML";
import { Span as Span_3 } from "@zcomponent/html/lib/span";
import { Div as Div_4 } from "@zcomponent/html/lib/div";
import { fillCVContent as fillCVContent_5 } from "./fillCVContent";
import { Button as Button_6 } from "@zcomponent/html/lib/button";
import { hidePopUp as hidePopUp_7 } from "./hidePopUp";
import { LaunchURL as LaunchURL_8 } from "@zcomponent/core/lib/behaviors/LaunchURL";
import { toggleInstantTracking as toggleInstantTracking_9 } from "./toggleInstantTracking";
import { ConsoleLog as ConsoleLog_10 } from "@zcomponent/core/lib/behaviors/ConsoleLog";
import { toggleInstantTracking as toggleInstantTracking_11 } from "./toggleInstantTracking";

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
		Img: Img_1 & {
			behaviors: {

			}
		},
		Img_2: Img_1 & {
			behaviors: {

			}
		},
		Popup: HTML_2 & {
			behaviors: {

			}
		},
		Span_25: Span_3 & {
			behaviors: {

			}
		},
		Wrapper: Div_4 & {
			behaviors: {

			}
		},
		backing: Div_4 & {
			behaviors: {
				0: fillCVContent_5,
				fillCVContent: fillCVContent_5,
			}
		},
		bottom_bar: HTML_2 & {
			behaviors: {

			}
		},
		exit: Button_6 & {
			behaviors: {
				0: hidePopUp_7,
				hidePopUp: hidePopUp_7,
			}
		},
		get_yourown: Div_4 & {
			behaviors: {
				0: LaunchURL_8,
				LaunchURL: LaunchURL_8,
			}
		},
		placementButton: Button_6 & {
			behaviors: {
				0: toggleInstantTracking_9,
				toggleInstantTracking: toggleInstantTracking_9,
				1: ConsoleLog_10,
				ConsoleLog: ConsoleLog_10,
			}
		},
		placementIcon: Img_1 & {
			behaviors: {

			}
		},
		resetButton: Button_6 & {
			behaviors: {
				0: toggleInstantTracking_11,
				toggleInstantTracking: toggleInstantTracking_11,
				1: ConsoleLog_10,
				ConsoleLog: ConsoleLog_10,
			}
		},
		resetcon: Img_1 & {
			behaviors: {

			}
		},
		top_Wrapper: Div_4 & {
			behaviors: {

			}
		},
		top_bar: HTML_2 & {
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
