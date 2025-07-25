import { ZComponent, ContextManager, Observable, Animation, Layer, LayerClip, Event } from "@zcomponent/core";

import { default as Buttons_zcomp_0 } from "../AR UI/Buttons.zcomp";
import { DefaultEnvironment as DefaultEnvironment_1 } from "@zcomponent/three/lib/components/environments/DefaultEnvironment";
import { DefaultLoader as DefaultLoader_2 } from "@zcomponent/core/lib/components/DefaultLoader";
import { Group as Group_3 } from "@zcomponent/three/lib/components/Group";
import { GoogleAnalytics as GoogleAnalytics_4 } from "@zcomponent/google-analytics/lib/components/GoogleAnalytics";
import { InstantWorldTracker as InstantWorldTracker_5 } from "@zcomponent/zappar-three/lib/components/trackers/InstantWorldTracker";
import { togglePlacement as togglePlacement_6 } from "./togglePlacement";
import { RenderSettings as RenderSettings_7 } from "@zcomponent/three/lib/components/RenderSettings";
import { ShadowPlane as ShadowPlane_8 } from "@zcomponent/three/lib/components/meshes/ShadowPlane";
import { default as UI_zcomp_9 } from "../Screen UI/UI.zcomp";
import { ZapparCamera as ZapparCamera_10 } from "@zcomponent/zappar-three/lib/components/cameras/Camera";
import { default as cardContent_zcomp_11 } from "../Content/cardContent.zcomp";
import { DefaultCookieConsent as DefaultCookieConsent_12 } from "@zcomponent/core/lib/components/DefaultCookieConsent";

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
		DefaultEnvironment: DefaultEnvironment_1 & {
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
		GoogleAnalytics: GoogleAnalytics_4 & {
			behaviors: {

			}
		},
		InstantWorldTracker: InstantWorldTracker_5 & {
			behaviors: {
				0: togglePlacement_6,
				togglePlacement: togglePlacement_6,
			}
		},
		RenderSettings: RenderSettings_7 & {
			behaviors: {

			}
		},
		ShadowPlane: ShadowPlane_8 & {
			behaviors: {

			}
		},
		UI: UI_zcomp_9 & {
			behaviors: {

			}
		},
		ZapparCamera: ZapparCamera_10 & {
			behaviors: {

			}
		},
		cardContent: cardContent_zcomp_11 & {
			behaviors: {

			}
		},
		DefaultCookieConsent: DefaultCookieConsent_12 & {
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
