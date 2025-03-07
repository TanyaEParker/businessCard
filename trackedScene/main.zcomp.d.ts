import { ZComponent, ContextManager, Observable, Animation, Layer, LayerClip, Event } from "@zcomponent/core";

import { CameraEnvironmentMap as CameraEnvironmentMap_0 } from "@zcomponent/zappar-three/lib/components/environments/CameraEnvironmentMap";
import { DefaultCookieConsent as DefaultCookieConsent_1 } from "@zcomponent/core/lib/components/DefaultCookieConsent";
import { DefaultLoader as DefaultLoader_2 } from "@zcomponent/core/lib/components/DefaultLoader";
import { Group as Group_3 } from "@zcomponent/three/lib/components/Group";
import { ZapparCamera as ZapparCamera_4 } from "@zcomponent/zappar-three/lib/components/cameras/Camera";
import { ImageTracker as ImageTracker_5 } from "@zcomponent/zappar-three/lib/components/trackers/ImageTracker";
import { PlayLayerClip as PlayLayerClip_6 } from "@zcomponent/core/lib/behaviors/PlayLayerClip";
import { OverrideOpacity as OverrideOpacity_7 } from "@zcomponent/three/lib/behaviors/OverrideOpacity";
import { Box as Box_8 } from "@zcomponent/three/lib/components/meshes/Box";
import { ShadowPlane as ShadowPlane_9 } from "@zcomponent/three/lib/components/meshes/ShadowPlane";

interface ConstructorProps {

}

/**
* @zcomponent
* @zicon zcomponent
*/
declare class Comp extends ZComponent {

	constructor(contextManager: ContextManager, constructorProps: ConstructorProps);

	nodes: {
		CameraEnvironmentMap: CameraEnvironmentMap_0 & {
			behaviors: {

			}
		},
		DefaultCookieConsent: DefaultCookieConsent_1 & {
			behaviors: {

			}
		},
		DefaultLoader: DefaultLoader_2 & {
			behaviors: {

			}
		},
		Defaults: Group_3 & {
			behaviors: {

			}
		},
		ZapparCamera: ZapparCamera_4 & {
			behaviors: {

			}
		},
		business_cardback_pngzpt: ImageTracker_5 & {
			behaviors: {
				0: PlayLayerClip_6,
				PlayLayerClip: PlayLayerClip_6,
				1: PlayLayerClip_6,
				PlayLayerClip0: PlayLayerClip_6,
				2: OverrideOpacity_7,
				OverrideOpacity: OverrideOpacity_7,
			}
		},
		Box: Box_8 & {
			behaviors: {

			}
		},
		ShadowPlane: ShadowPlane_9 & {
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
