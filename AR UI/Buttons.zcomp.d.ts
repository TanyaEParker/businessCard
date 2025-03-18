import { ZComponent, ContextManager, Observable, Animation, Layer, LayerClip, Event } from "@zcomponent/core";

import { Button as Button_0 } from "@zcomponent/html/lib/button";
import { showPopUp as showPopUp_1 } from "./showPopUp";
import { LaunchURL as LaunchURL_2 } from "@zcomponent/core/lib/behaviors/LaunchURL";
import { startVP as startVP_3 } from "./startVP";
import { CSS as CSS_4 } from "@zcomponent/html/lib/CSS";
import { HTML as HTML_5 } from "@zcomponent/three/lib/components/HTML";
import { Img as Img_6 } from "@zcomponent/html/lib/img";
import { Span as Span_7 } from "@zcomponent/html/lib/span";
import { Div as Div_8 } from "@zcomponent/html/lib/div";
import { toggleDisplay as toggleDisplay_9 } from "./toggleDisplay";

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
			}
		},
		Button0: Button_0 & {
			behaviors: {
				0: LaunchURL_2,
				LaunchURL: LaunchURL_2,
			}
		},
		Button_2: Button_0 & {
			behaviors: {
				0: LaunchURL_2,
				LaunchURL: LaunchURL_2,
			}
		},
		Button_3: Button_0 & {
			behaviors: {
				0: LaunchURL_2,
				LaunchURL: LaunchURL_2,
			}
		},
		Button_4: Button_0 & {
			behaviors: {
				0: LaunchURL_2,
				LaunchURL: LaunchURL_2,
			}
		},
		Button_5: Button_0 & {
			behaviors: {
				0: startVP_3,
				startVP: startVP_3,
			}
		},
		CSS: CSS_4 & {
			behaviors: {

			}
		},
		HTML: HTML_5 & {
			behaviors: {

			}
		},
		Img: Img_6 & {
			behaviors: {

			}
		},
		Img0: Img_6 & {
			behaviors: {

			}
		},
		Img_2: Img_6 & {
			behaviors: {

			}
		},
		Img_3: Img_6 & {
			behaviors: {

			}
		},
		Img_4: Img_6 & {
			behaviors: {

			}
		},
		Img_5: Img_6 & {
			behaviors: {

			}
		},
		buttonCopy: Span_7 & {
			behaviors: {

			}
		},
		buttonCopy0: Span_7 & {
			behaviors: {

			}
		},
		buttonCopy_2: Span_7 & {
			behaviors: {

			}
		},
		buttonCopy_3: Span_7 & {
			behaviors: {

			}
		},
		buttonCopy_4: Span_7 & {
			behaviors: {

			}
		},
		buttonCopy_5: Span_7 & {
			behaviors: {

			}
		},
		buttonWrapper: Div_8 & {
			behaviors: {

			}
		},
		buttonWrapper0: Div_8 & {
			behaviors: {

			}
		},
		buttonWrapper_2: Div_8 & {
			behaviors: {

			}
		},
		buttonWrapper_3: Div_8 & {
			behaviors: {

			}
		},
		buttonWrapper_4: Div_8 & {
			behaviors: {

			}
		},
		buttonWrapper_5: Div_8 & {
			behaviors: {

			}
		},
		container: Div_8 & {
			behaviors: {
				0: toggleDisplay_9,
				toggleDisplay: toggleDisplay_9,
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
