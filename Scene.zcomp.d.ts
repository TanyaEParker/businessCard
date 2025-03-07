import { ZComponent, ContextManager, Observable, Animation, Layer, LayerClip, Event } from "@zcomponent/core";

import { Plane as Plane_0 } from "@zcomponent/three/lib/components/meshes/Plane";
import { LaunchURL as LaunchURL_1 } from "@zcomponent/core/lib/behaviors/LaunchURL";
import { MeshBasicMaterial as MeshBasicMaterial_2 } from "@zcomponent/three/lib/components/materials/MeshBasicMaterial";
import { CameraEnvironmentMap as CameraEnvironmentMap_3 } from "@zcomponent/zappar-three/lib/components/environments/CameraEnvironmentMap";
import { DefaultCookieConsent as DefaultCookieConsent_4 } from "@zcomponent/core/lib/components/DefaultCookieConsent";
import { DefaultLoader as DefaultLoader_5 } from "@zcomponent/core/lib/components/DefaultLoader";
import { Group as Group_6 } from "@zcomponent/three/lib/components/Group";
import { DirectionalLight as DirectionalLight_7 } from "@zcomponent/three/lib/components/lights/DirectionalLight";
import { ImageTracker as ImageTracker_8 } from "@zcomponent/zappar-three/lib/components/trackers/ImageTracker";
import { OverrideOpacity as OverrideOpacity_9 } from "@zcomponent/three/lib/behaviors/OverrideOpacity";
import { PlayLayerClip as PlayLayerClip_10 } from "@zcomponent/core/lib/behaviors/PlayLayerClip";
import { Text as Text_11 } from "@zcomponent/three/lib/components/text/Text";
import { ZapparCamera as ZapparCamera_12 } from "@zcomponent/zappar-three/lib/components/cameras/Camera";

interface ConstructorProps {

}

/**
* @zcomponent
* @zicon zcomponent
*/
declare class Comp extends ZComponent {

	constructor(contextManager: ContextManager, constructorProps: ConstructorProps);

	nodes: {
		Button: Plane_0 & {
			behaviors: {
				0: LaunchURL_1,
			}
		},
		Button_Material: MeshBasicMaterial_2 & {
			behaviors: {

			}
		},
		CameraEnvironmentMap: CameraEnvironmentMap_3 & {
			behaviors: {

			}
		},
		DefaultCookieConsent: DefaultCookieConsent_4 & {
			behaviors: {

			}
		},
		DefaultLoader: DefaultLoader_5 & {
			behaviors: {

			}
		},
		Defaults: Group_6 & {
			behaviors: {

			}
		},
		DirectionalLight: DirectionalLight_7 & {
			behaviors: {

			}
		},
		ImageTracker: ImageTracker_8 & {
			behaviors: {
				0: OverrideOpacity_9,
				1: PlayLayerClip_10,
				2: PlayLayerClip_10,
			}
		},
		Shade: Plane_0 & {
			behaviors: {

			}
		},
		Shade_Material: MeshBasicMaterial_2 & {
			behaviors: {

			}
		},
		Text: Text_11 & {
			behaviors: {

			}
		},
		ZapparCamera: ZapparCamera_12 & {
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
