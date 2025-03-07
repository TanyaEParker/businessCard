import { ZComponent, ContextManager, Observable, Animation, Layer, LayerClip, Event } from "@zcomponent/core";

import { CameraEnvironmentMap as CameraEnvironmentMap_0 } from "@zcomponent/zappar-three/lib/components/environments/CameraEnvironmentMap";
import { DefaultCookieConsent as DefaultCookieConsent_1 } from "@zcomponent/core/lib/components/DefaultCookieConsent";
import { DefaultLoader as DefaultLoader_2 } from "@zcomponent/core/lib/components/DefaultLoader";
import { Group as Group_3 } from "@zcomponent/three/lib/components/Group";
import { DirectionalLight as DirectionalLight_4 } from "@zcomponent/three/lib/components/lights/DirectionalLight";
import { ImageTracker as ImageTracker_5 } from "@zcomponent/zappar-three/lib/components/trackers/ImageTracker";
import { OverrideOpacity as OverrideOpacity_6 } from "@zcomponent/three/lib/behaviors/OverrideOpacity";
import { PlayLayerClip as PlayLayerClip_7 } from "@zcomponent/core/lib/behaviors/PlayLayerClip";
import { ZapparCamera as ZapparCamera_8 } from "@zcomponent/zappar-three/lib/components/cameras/Camera";
import { Plane as Plane_9 } from "@zcomponent/three/lib/components/meshes/Plane";
import { LaunchURL as LaunchURL_10 } from "@zcomponent/core/lib/behaviors/LaunchURL";
import { MeshBasicMaterial as MeshBasicMaterial_11 } from "@zcomponent/three/lib/components/materials/MeshBasicMaterial";
import { Text as Text_12 } from "@zcomponent/three/lib/components/text/Text";

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
		DirectionalLight: DirectionalLight_4 & {
			behaviors: {

			}
		},
		ImageTracker: ImageTracker_5 & {
			behaviors: {
				0: OverrideOpacity_6,
				1: PlayLayerClip_7,
				2: PlayLayerClip_7,
			}
		},
		ZapparCamera: ZapparCamera_8 & {
			behaviors: {

			}
		},
		Shade: Plane_9 & {
			behaviors: {

			}
		},
		Button: Plane_9 & {
			behaviors: {
				0: LaunchURL_10,
			}
		},
		Shade_Material: MeshBasicMaterial_11 & {
			behaviors: {

			}
		},
		Button_Material: MeshBasicMaterial_11 & {
			behaviors: {

			}
		},
		Text: Text_12 & {
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
