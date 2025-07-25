import { Component, Behavior, BehaviorConstructorProps, ContextManager, registerBehaviorRunAtDesignTime, started } from "@zcomponent/core";
import { Div as Div } from "@zcomponent/html/lib/div";
import { default as UI} from "./UI.zcomp";

interface ConstructionProps {
	// Add any constructor props you'd like for your behavior here
}

const CVContent =
`
<div>
    <h1>Tanya Eloise Parker</h1>
    <h2>Senior Developer | WebXR Specialist | Fan of Pigeons</h2>
    Portfolio: <a href="https://www.tanyaeloiseparker.co.uk/work" target="_blank">tanyaeloiseparker.co.uk/work</a><br>
    LinkedIn: <a href="https://www.linkedin.com/in/tparkerdev/" target="_blank">linkedin.com/in/tparkerdev</a><br>
    Email: <a href="mailto:tanyaparkerdev@gmail.com" target="_blank">tanyaparkerdev@gmail.com</a><br>
    Phone: +447802474557<br>
    <h3> Professional Summary</h3>
    <span>With nine years experience as a senior developer with a proven track record of delivering
        polished Extended Reality (XR) activations. My skillset focuses on frontend workflows and
        Three.js whilst ensuring smooth, optimised performance across a swathe of mobile devices. I’m
        looking to further develop my frontend skillset, and expose myself to new tech stacks,
        workflows as well as to contribute to memorable experiences and projects.
    </span>
    <h3>Professional Highlights</h3>
    <ul>
        <li>Primary developer behind three years of award-winning digital content for a leading UK
            Attraction.</li>
        <li>Coordinated development for a multinational webXR activation for a leading children's
            brand.
        </li>
        <li>Lead developer for an educational app for a New Zealand retailer which reached #1 on
            the app stores.
        </li>
        <li>Solo developer behind supporting digital content for a documentary by a leading UK
            broadcaster.
        </li>
        <li>Primary developer behind five years of post-launch content drops and app updates for
            a leading European confectionary brands digital platform.
        </li>
    </ul>
    <h3>Technical Skills</h3>
    <table id="CV_Skills_Table">
        <tr>
            <td>typescript</td>
            <td>Three.js</td>
            <td>PixiJS</td>
        </tr>
        <tr>
            <td>React</td>
            <td>Zustrand</td>
            <td>HTML5 & CSS3</td>
        </tr>
        <tr>
            <td>RESTful APIs</td>
            <td>AWS</td>
        </tr>
    </table>
    <h3>Employment History</h3>
    <h4>Freelance Frontend Developer</h4>
    <span class="CV_Job_Span">Six months Skills used: HTML, CSS, Typescript, PixiJS, WebGL, Source Control</span>
    <ul>
        <li>Key developer for an interactive training experience for customers of a US home
            improvement supplier. The project made extensive use of HTML5, Three.js, WebGL and
            WebXR Libraries. Additionally provided post-launch support which included
            implementing structure for a Spanish localisation</li>
        <li>Increased proficiency in Vite and Pixi.JS as well as defining Github versioning policies
            alongside general development in Typescript as part of an external developer team.
        </li>
    </ul>
    <h4>Senior Developer - Zappar</h4>
    <span class="CV_Job_Span">Chiswick, Six Years Skills Used: Typescript, Three.JS, AWS, RESTful APIs</span>
    <ul>
        <li> Directly managed junior developer team, conducting 1:1 meetings to discuss
            workloads, wellbeing, project issues and blockers, and facilitating any necessary
            training and upskilling.
        </li>
        <li>Close collaborator with the production team, vetting incoming projects for early issue
            detection as well as providing timing and costing estimates. Ensured stakeholders were
            informed in a timely manner through multiple deliverable milestones and completed on
            time and to client satisfaction.
        </li>
        <li> Led numerous major projects, taking time to establish frameworks for junior developers
            to work from, as well as enshrining best practices regarding Git source control. Notable
            projects include:
            <ul>
                <li> Disney Princess: Portal to the Princesses (2024): A global Three.js based
                    activation across 14 separate markets. Actively managed Junior developers
                    whilst also managing concurrent development of a HLS alpha video streaming
                    implementation. Across all markets, the activation has been viewed tens of
                    thousands of times.</li>
                <li>Legoland (2021-2024): Spearheaded multiple award winning (2023 Auggie
                    Awards) initiatives to revitalise LEGOLAND Attractions including the iconic
                    Minilands area. Based around bolstering in-park digital content served through
                    the LEGOLAND app, these initiatives have attracted over two million users, and
                    over 400 cumulative hours of playtime across two parks.</li>
                <li>Countdown Super Insects (2020): Led development of this award-winning
                    (2021 Auggie Awards) educational app for Countdown, a leading New Zealand
                    supermarket. Developed the core framework and sticker scanning element,
                    along with the capstone Insect Race game experience. By the end of the
                    campaign, Super Insects had reached #1 in the App Stores, had been seen by
                    over 50,000 users and provided Countdown with a 4.5% increase in
                    transactions over 30$NZ.</li>
            </ul>
        </li>
    </ul>
    <h4>Creative Content Developer - Zappar</h4>
    <span class="CV_Job_Span">Chiswick, Three Years Skills Used: Typescript, AWS</span>
    <ul>
        <li> Handled small scale projects and activations, steadily progressing to larger and larger
            contributions.
            <ul>
                <li> Developed a capstone activation for an interactive Panini sticker album
                    celebrating Disneyland Paris' 25th anniversary in 2017.
                </li>
                <li>Contributed two of the games available within PEZ Play at launch in 2016.
                </li>
                <li>Sole developer behind the AR Activations attached to the BBC & Open
                    University program “The Human Body: Secrets of Your Life Revealed” in 2017</li>
            </ul>
        </li>
    </ul>
    <h3>Qualifications</h3>
    Ba (Hons) Computer Games Arts<br>
    UCA Farnham - 1st
</div>
`
/**
 * @zbehavior 
 * @zparents html/element/div
 **/
export class fillCVContent extends Behavior<Div> {

	protected zcomponent = this.getZComponentInstance(UI);
		

	constructor(contextManager: ContextManager, instance: Div, protected constructorProps: ConstructionProps) {
		super(contextManager, instance);

		started(contextManager).then(()=>
		{
			instance.element.innerHTML = CVContent;
		})
		/*
		// You can register handlers for events on the node that this behavior
		// is attached to like this:

		this.register(this.instance.onPointerDown, evt => {
			// Code to handle event
		});

		// Or against other nodes in your zcomp file
		this.register(this.zcomponent.nodes.MyNode.onPointerDown, evt => {

		});
		
		*/
	}

	dispose() {
		// Clean up any resources
		// ...
		return super.dispose();
	}
}

// Uncomment below to run this behavior at design time
registerBehaviorRunAtDesignTime(fillCVContent);
