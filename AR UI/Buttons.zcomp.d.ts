import { ZComponent, ContextManager, Observable, Animation, Layer, LayerClip, Event } from "@zcomponent/core";

import { Button as Button_0 } from "@zcomponent/html/lib/button";
import { showPopUp as showPopUp_1 } from "./showPopUp";
import { LogAnalyticsEvent as LogAnalyticsEvent_2 } from "@zcomponent/core/lib/behaviors/LogAnalyticsEvent";
import { LaunchURL as LaunchURL_3 } from "@zcomponent/core/lib/behaviors/LaunchURL";
import { startVP as startVP_4 } from "./startVP";
import { CSS as CSS_5 } from "@zcomponent/html/lib/CSS";
import { HTML as HTML_6 } from "@zcomponent/three/lib/components/HTML";
import { Img as Img_7 } from "@zcomponent/html/lib/img";
import { Span as Span_8 } from "@zcomponent/html/lib/span";
import { Div as Div_9 } from "@zcomponent/html/lib/div";
import { toggleDisplay as toggleDisplay_10 } from "./toggleDisplay";

interface ConstructorProps {

}

/**
* @zcomponent
* @zicon zcomponent
*/
declare class Comp extends ZComponent {

	constructor(contextManager: ContextManager, constructorProps: ConstructorProps);

	nodes: {
		Button: Button_0 & {
			behaviors: {
				0: showPopUp_1,
				showPopUp: showPopUp_1,
				1: LogAnalyticsEvent_2,
				LogAnalyticsEvent: LogAnalyticsEvent_2,
			}
		},
		Button0: Button_0 & {
			behaviors: {
				0: LaunchURL_3,
				LaunchURL: LaunchURL_3,
				1: LogAnalyticsEvent_2,
				LogAnalyticsEvent: LogAnalyticsEvent_2,
			}
		},
		Button_2: Button_0 & {
			behaviors: {
				0: LaunchURL_3,
				LaunchURL: LaunchURL_3,
				1: LogAnalyticsEvent_2,
				LogAnalyticsEvent: LogAnalyticsEvent_2,
			}
		},
		Button_3: Button_0 & {
			behaviors: {
				0: LaunchURL_3,
				LaunchURL: LaunchURL_3,
				1: LogAnalyticsEvent_2,
				LogAnalyticsEvent: LogAnalyticsEvent_2,
			}
		},
		Button_4: Button_0 & {
			behaviors: {
				0: LaunchURL_3,
				LaunchURL: LaunchURL_3,
				1: LogAnalyticsEvent_2,
				LogAnalyticsEvent: LogAnalyticsEvent_2,
			}
		},
		Button_5: Button_0 & {
			behaviors: {
				0: startVP_4,
				startVP: startVP_4,
				1: LogAnalyticsEvent_2,
				LogAnalyticsEvent: LogAnalyticsEvent_2,
			}
		},
		CSS: CSS_5 & {
			behaviors: {

			}
		},
		HTML: HTML_6 & {
			behaviors: {

			}
		},
		Img: Img_7 & {
			behaviors: {

			}
		},
		Img0: Img_7 & {
			behaviors: {

			}
		},
		Img_2: Img_7 & {
			behaviors: {

			}
		},
		Img_3: Img_7 & {
			behaviors: {

			}
		},
		Img_4: Img_7 & {
			behaviors: {

			}
		},
		Img_5: Img_7 & {
			behaviors: {

			}
		},
		buttonCopy: Span_8 & {
			behaviors: {

			}
		},
		buttonCopy0: Span_8 & {
			behaviors: {

			}
		},
		buttonCopy_2: Span_8 & {
			behaviors: {

			}
		},
		buttonCopy_3: Span_8 & {
			behaviors: {

			}
		},
		buttonCopy_4: Span_8 & {
			behaviors: {

			}
		},
		buttonCopy_5: Span_8 & {
			behaviors: {

			}
		},
		buttonWrapper: Div_9 & {
			behaviors: {

			}
		},
		buttonWrapper0: Div_9 & {
			behaviors: {

			}
		},
		buttonWrapper_2: Div_9 & {
			behaviors: {

			}
		},
		buttonWrapper_3: Div_9 & {
			behaviors: {

			}
		},
		buttonWrapper_4: Div_9 & {
			behaviors: {

			}
		},
		buttonWrapper_5: Div_9 & {
			behaviors: {

			}
		},
		container: Div_9 & {
			behaviors: {
				0: toggleDisplay_10,
				toggleDisplay: toggleDisplay_10,
			}
		},
		wrapper: Div_9 & {
			behaviors: {

			}
		},
	};

	animation: Animation & { layers: {
		UIDisplay: Layer & { clips: {
			shown0: LayerClip;
			hidden0: LayerClip;
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
