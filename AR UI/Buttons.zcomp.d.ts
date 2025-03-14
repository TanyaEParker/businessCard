import { ZComponent, ContextManager, Observable, Animation, Layer, LayerClip, Event } from "@zcomponent/core";

import { HTML as HTML_0 } from "@zcomponent/three/lib/components/HTML";
import { Button as Button_1 } from "@zcomponent/html/lib/button";
import { showPopUp as showPopUp_2 } from "./showPopUp";
import { CSS as CSS_3 } from "@zcomponent/html/lib/CSS";
import { Div as Div_4 } from "@zcomponent/html/lib/div";
import { toggleDisplay as toggleDisplay_5 } from "./toggleDisplay";
import { Span as Span_6 } from "@zcomponent/html/lib/span";
import { LaunchURL as LaunchURL_7 } from "@zcomponent/core/lib/behaviors/LaunchURL";
import { startVP as startVP_8 } from "./startVP";
import { Img as Img_9 } from "@zcomponent/html/lib/img";

interface ConstructorProps {

}

/**
* @zcomponent
* @zicon zcomponent
*/
declare class Comp extends ZComponent {

	constructor(contextManager: ContextManager, constructorProps: ConstructorProps);

	nodes: {
		HTML: HTML_0 & {
			behaviors: {

			}
		},
		Button: Button_1 & {
			behaviors: {
				0: showPopUp_2,
				showPopUp: showPopUp_2,
			}
		},
		CSS: CSS_3 & {
			behaviors: {

			}
		},
		container: Div_4 & {
			behaviors: {
				0: toggleDisplay_5,
				toggleDisplay: toggleDisplay_5,
			}
		},
		buttonWrapper: Div_4 & {
			behaviors: {

			}
		},
		buttonCopy: Span_6 & {
			behaviors: {

			}
		},
		buttonWrapper0: Div_4 & {
			behaviors: {

			}
		},
		Button0: Button_1 & {
			behaviors: {
				0: LaunchURL_7,
				LaunchURL: LaunchURL_7,
			}
		},
		buttonCopy0: Span_6 & {
			behaviors: {

			}
		},
		buttonWrapper_2: Div_4 & {
			behaviors: {

			}
		},
		Button_2: Button_1 & {
			behaviors: {
				0: LaunchURL_7,
				LaunchURL: LaunchURL_7,
			}
		},
		buttonCopy_2: Span_6 & {
			behaviors: {

			}
		},
		buttonWrapper_3: Div_4 & {
			behaviors: {

			}
		},
		Button_3: Button_1 & {
			behaviors: {
				0: LaunchURL_7,
				LaunchURL: LaunchURL_7,
			}
		},
		buttonCopy_3: Span_6 & {
			behaviors: {

			}
		},
		buttonWrapper_4: Div_4 & {
			behaviors: {

			}
		},
		Button_4: Button_1 & {
			behaviors: {
				0: LaunchURL_7,
				LaunchURL: LaunchURL_7,
			}
		},
		buttonCopy_4: Span_6 & {
			behaviors: {

			}
		},
		buttonWrapper_5: Div_4 & {
			behaviors: {

			}
		},
		Button_5: Button_1 & {
			behaviors: {
				0: startVP_8,
				startVP: startVP_8,
			}
		},
		buttonCopy_5: Span_6 & {
			behaviors: {

			}
		},
		Img: Img_9 & {
			behaviors: {

			}
		},
		Img0: Img_9 & {
			behaviors: {

			}
		},
		Img_2: Img_9 & {
			behaviors: {

			}
		},
		Img_3: Img_9 & {
			behaviors: {

			}
		},
		Img_4: Img_9 & {
			behaviors: {

			}
		},
		Img_5: Img_9 & {
			behaviors: {

			}
		},
	};

	animation: Animation & { layers: {
		UIDisplay: Layer & { clips: {
			hidden0: LayerClip;
			shown0: LayerClip;
		}};
	}};

	/**
	 * Determines if this object and its children are rendered to the screen.
	 * 
	 * @zprop
	 * @zdefault true
	 * @zgroup Appearance
	 * @zgrouppriority 11
	 */
	public visible: Observable<boolean>;

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
}

export default Comp;
