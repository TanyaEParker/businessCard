import { Component, Behavior, BehaviorConstructorProps, ContextManager, registerBehaviorRunAtDesignTime } from "@zcomponent/core";
import { Div as Div } from "@zcomponent/html/lib/div";
import { default as UI} from "./UI.zcomp";

interface ConstructionProps {
	// Add any constructor props you'd like for your behavior here
}

/**
 * @zbehavior 
 * @zparents html/element/div
 **/
export class populatePopUp extends Behavior<Div> {

	protected zcomponent = this.getZComponentInstance(UI);
		
	private innerHTML = `<div>
			<h1>Tanya Eloise Parker</h1>
			<div>
				<div>
					Senior Developer || WebXR Specialist
					Portfolio
					URL To portfolio page
				</div>
				<div>
					Email
					EMAIL LINK
					Contact Number
					07802474557
				</div>
				<h2>Profile</h2>
				<span>A developer with eight years experience in a professional context. Deeply enjoys the problem solving aspect of the discipline, along with  ways to streamline and optimise deliverables. Areas of expertise include Typescript and THREE.js. Desires to constantly challenge and stretch her creative boundaries.</span>
				<h2> Work History</h2>
				<div>Zappar Zappar URL</div><div>Senior Developer Chiswick, June 2016-Feb 2025</div>
				Joined Zappar as a Creative Content Developer, using their in-house content authoring software Zapworks Studio to create AR experiences delivered via the Zappar mobile app. Zapworks Studio required the use of Typescript to add interactivity and functionality to the experiences. Delivering content over the air to a user's device required extensive optimisation of filesize, as well as further over the air content streaming from an S3 bucket. This requirement became increasingly relevant as projects grew in scope. The work around in-situ activations at LEGOLAND required careful optimisation to not sacrifice visual quality whilst also being feasible for a user to load on the fly over the park Wifi / mobile data. Larger Studio projects also required extensive UI work, and during my time at Zappar I introduced a workflow / framework leveraging Studio to work around a limitation regarding adaptive UI for different screen resolutions and ratios.

				During my time at Zappar, the specifics of my workflow consistently changed. The App-based delivery of content was primarily superseded by mobile WebAR, outside of whitelabel app experiences or app embeds. This was further changed by the introduction of Mattercraft, a web-first authoring platform building off from Three JS. As the Zappar project pipeline moved from Studio to Mattercraft, I gained experience using Three JS, as well as the fundamentals of HTML and CSS. Mattercraft integrates better with traditional web development workflow, which I found an interesting adjustment to my workflow but one I adapted to quickly.

				In 2019 I was promoted to Senior Developer, which primarily came with the requirement to directly manage the dev team, which at most was composed of seven other developers. This mostly involved 1:1 meetings, managing project timings with the production team and facilitating training.
				<h2>Professional Skills</h2>
				<div>
					Typescript
					Three.js
					Perfomance Optimisaton
					Frontend Development
					(HTML & CSS)
				</div>
				<div>
					Asset Creation / Adjustment
					Audio Editing
					ASW S3
				</div>
				<h2>Hobbies & Interests</h2>
				Avid Reader
				Frequent Cross Stitcher
				Passionate Home Cook
				Perpetual Dungeons and Dragons DM
				<h2>Qualifications</h2>
				UCA Farnham 1st
				BA(Hons) Computer Games Arts
				Barrow Sixth Form College Pass
				BTEC Art and Design Foundation
				Furness Academy 10 A* - C
				GSCE Including MAths, English & Science
				<h2>Other Experience</h2>
			</div>
		</div>`;


	constructor(contextManager: ContextManager, instance: Div, protected constructorProps: ConstructionProps) {
		super(contextManager, instance);
		this.instance.element.innerHTML = this.innerHTML;

	}

	dispose() {
		// Clean up any resources
		// ...
		return super.dispose();
	}
}

// Uncomment below to run this behavior at design time
registerBehaviorRunAtDesignTime(populatePopUp);
