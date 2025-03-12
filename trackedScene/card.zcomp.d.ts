import { ZComponent, ContextManager, Observable, Animation, Layer, LayerClip, Event } from "@zcomponent/core";

import { DefaultLoader as DefaultLoader_0 } from "@zcomponent/core/lib/components/DefaultLoader";
import { Group as Group_1 } from "@zcomponent/three/lib/components/Group";
import { ZapparCamera as ZapparCamera_2 } from "@zcomponent/zappar-three/lib/components/cameras/Camera";
import { ImageTracker as ImageTracker_3 } from "@zcomponent/zappar-three/lib/components/trackers/ImageTracker";
import { PlayLayerClip as PlayLayerClip_4 } from "@zcomponent/core/lib/behaviors/PlayLayerClip";
import { OverrideOpacity as OverrideOpacity_5 } from "@zcomponent/three/lib/behaviors/OverrideOpacity";
import { cardEasterEgg as cardEasterEgg_6 } from "./cardEasterEgg";
import { PlaySound as PlaySound_7 } from "@zcomponent/core/lib/behaviors/PlaySound";
import { default as cardContent_zcomp_8 } from "../cardContent.zcomp";

interface ConstructorProps {

}

/**
* @zcomponent
* @zicon zcomponent
*/
declare class Comp extends ZComponent {

	constructor(contextManager: ContextManager, constructorProps: ConstructorProps);

	nodes: {
		DefaultLoader: DefaultLoader_0 & {
			behaviors: {

			}
		},
		Defaults: Group_1 & {
			behaviors: {

			}
		},
		ZapparCamera: ZapparCamera_2 & {
			behaviors: {

			}
		},
		business_cardback_pngzpt: ImageTracker_3 & {
			behaviors: {
				0: PlayLayerClip_4,
				PlayLayerClip: PlayLayerClip_4,
				1: PlayLayerClip_4,
				PlayLayerClip0: PlayLayerClip_4,
				2: OverrideOpacity_5,
				OverrideOpacity: OverrideOpacity_5,
			}
		},
		business_cardfront_jpgzpt: ImageTracker_3 & {
			behaviors: {
				0: cardEasterEgg_6,
				cardEasterEgg: cardEasterEgg_6,
				1: PlaySound_7,
				PlaySound: PlaySound_7,
			}
		},
		cardContent: cardContent_zcomp_8 & {
			behaviors: {

			}
		},
	};

	animation: Animation & { layers: {
		AnchorVisibility: Layer & { clips: {
			Hidden0: LayerClip;
			Visible0: LayerClip;
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
