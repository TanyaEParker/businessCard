import { ZComponent, ContextManager, Observable, Animation, Layer, LayerClip, Event } from "@zcomponent/core";

import { default as Buttons_zcomp_0 } from "../AR UI/Buttons.zcomp";
import { DefaultCookieConsent as DefaultCookieConsent_1 } from "@zcomponent/core/lib/components/DefaultCookieConsent";
import { DefaultEnvironment as DefaultEnvironment_2 } from "@zcomponent/three/lib/components/environments/DefaultEnvironment";
import { DefaultLoader as DefaultLoader_3 } from "@zcomponent/core/lib/components/DefaultLoader";
import { Group as Group_4 } from "@zcomponent/three/lib/components/Group";
import { GoogleAnalytics as GoogleAnalytics_5 } from "@zcomponent/google-analytics/lib/components/GoogleAnalytics";
import { InstantWorldTracker as InstantWorldTracker_6 } from "@zcomponent/zappar-three/lib/components/trackers/InstantWorldTracker";
import { togglePlacement as togglePlacement_7 } from "./togglePlacement";
import { RenderSettings as RenderSettings_8 } from "@zcomponent/three/lib/components/RenderSettings";
import { ShadowPlane as ShadowPlane_9 } from "@zcomponent/three/lib/components/meshes/ShadowPlane";
import { default as UI_zcomp_10 } from "../Screen UI/UI.zcomp";
import { ZapparCamera as ZapparCamera_11 } from "@zcomponent/zappar-three/lib/components/cameras/Camera";
import { default as cardContent_zcomp_12 } from "../Content/cardContent.zcomp";

interface ConstructorProps {

}

/**
* @zcomponent
* @zicon zcomponent
*/
declare class Comp extends ZComponent {

	constructor(contextManager: ContextManager, constructorProps: ConstructorProps);

	nodes: {
		Buttons: Buttons_zcomp_0 & {
			behaviors: {

			}
		},
		DefaultCookieConsent: DefaultCookieConsent_1 & {
			behaviors: {

			}
		},
		DefaultEnvironment: DefaultEnvironment_2 & {
			behaviors: {

			}
		},
		DefaultLoader: DefaultLoader_3 & {
			behaviors: {

			}
		},
		Defaults: Group_4 & {
			behaviors: {

			}
		},
		GoogleAnalytics: GoogleAnalytics_5 & {
			behaviors: {

			}
		},
		InstantWorldTracker: InstantWorldTracker_6 & {
			behaviors: {
				0: togglePlacement_7,
				togglePlacement: togglePlacement_7,
			}
		},
		RenderSettings: RenderSettings_8 & {
			behaviors: {

			}
		},
		ShadowPlane: ShadowPlane_9 & {
			behaviors: {

			}
		},
		UI: UI_zcomp_10 & {
			behaviors: {

			}
		},
		ZapparCamera: ZapparCamera_11 & {
			behaviors: {

			}
		},
		cardContent: cardContent_zcomp_12 & {
			behaviors: {

			}
		},
	};

	animation: Animation & { layers: {

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
