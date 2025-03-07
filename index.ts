/*import { initialize } from "@zcomponent/three";
import { default as Scene } from "./Scene.zcomp";

initialize(Scene, {}, {
    launchButton: document.getElementById('launchButton')
});
*/
const contactsSupported = "contacts" in navigator;
const contactsButton = document.getElementById('ContactsButton');

if(!!contactsButton)
{
    if(contactsSupported)
    {
        contactsButton.addEventListener('click',addToContacts)
        contactsButton.style.display = "blokck";
    }
}

function addToContacts()
{
     var vcfString="BEGIN:VCARD\nVERSION:3.0\nFN:Tanya Eloise Parker\nN:Parker;Tanya;Eloise;;\nEMAIL;TYPE=INTERNET;TYPE=WORK:tanyaparkerdev@gmail.com\nTEL;TYPE=CELL:+447802474557\nTITLE:WebXR & Three.js Specialist\nBDAY:19940330\nEND:VCARD";
     var blob = new Blob([vcfString], {type: 'text/x-vcard'});
     var downloadUrl = URL.createObjectURL(blob);
     var a = document.createElement("a");
     a.href = downloadUrl;
     a.download = "tanya.vcf";
     document.body.appendChild(a);
     a.click();
     document.body.removeChild(a);
    // console.log(contactsSupported)
};

