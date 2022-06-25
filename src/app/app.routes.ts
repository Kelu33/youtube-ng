import { Routes } from "@angular/router";
import { VideosSectionComponent } from "./videos-section/videos-section.component";
import { CHANNELS } from "./channels-list";
import { Channel } from "src/models/channel.model";

const ROUTES: Routes = [
    { path: '', component: VideosSectionComponent }
];

const channels: Channel[] = CHANNELS; 
getChannelsSet(channels);

for ( let channel of channels) {
    let channelRoute = { path: channel.link, component: VideosSectionComponent };
    ROUTES.push(channelRoute);
}

export { ROUTES };

// !TODO create global function
// Remove duplicates Objects in array :
// src: https://stackoverflow.com/questions/2218999/how-to-remove-all-duplicates-from-an-array-of-objects
// author: Eydrian  
function getChannelsSet(channels: Channel[]): void {
  channels = channels.filter((value, index, self) =>
    index === self.findIndex((t) => (
      t.name === value.name
    ))
  )
}
