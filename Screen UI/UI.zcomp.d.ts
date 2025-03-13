import { ZComponent, ContextManager, Observable, Animation, Layer, LayerClip, Event } from "@zcomponent/core";

import { CSS as CSS_0 } from "@zcomponent/html/lib/CSS";
import { Div as Div_1 } from "@zcomponent/html/lib/div";
import { HTML as HTML_2 } from "@zcomponent/three/lib/components/HTML";
import { Button as Button_3 } from "@zcomponent/html/lib/button";
import { toggleInstantTracking as toggleInstantTracking_4 } from "./toggleInstantTracking";
import { Img as Img_5 } from "@zcomponent/html/lib/img";
import { toggleInstantTracking as toggleInstantTracking_6 } from "./toggleInstantTracking";

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
		Wrapper: Div_1 & {
			behaviors: {

			}
		},
		bottom_bar: HTML_2 & {
			behaviors: {

			}
		},
		placementButton: Button_3 & {
			behaviors: {
				0: toggleInstantTracking_4,
				toggleInstantTracking: toggleInstantTracking_4,
			}
		},
		placementIcon: Img_5 & {
			behaviors: {

			}
		},
		resetButton: Button_3 & {
			behaviors: {
				0: toggleInstantTracking_6,
				toggleInstantTracking: toggleInstantTracking_6,
			}
		},
		resetcon: Img_5 & {
			behaviors: {

			}
		},
		top_Wrapper: Div_1 & {
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
