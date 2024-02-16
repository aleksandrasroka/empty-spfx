// import pnp, pnp logging system, and any other selective imports needed
import { ISPFXContext, spfi, SPFI, SPFx } from '@pnp/sp/presets/all';
import { graphfi, GraphFI, SPFx as graphSPFx } from '@pnp/graph';

import { LogLevel, PnPLogging } from '@pnp/logging';
import '@pnp/sp/webs';
import '@pnp/sp/lists';
import '@pnp/sp/items';
import '@pnp/sp/batching';
import '@pnp/sp/sites';
import '@pnp/sp/fields';
import '@pnp/sp/site-users/web';

let _sp: SPFI;
let _graph: GraphFI;

export const getSP = (context: ISPFXContext): SPFI => {
    if (context !== null) {
        _sp = spfi().using(SPFx(context)).using(PnPLogging(LogLevel.Warning));
    }
    return _sp;
};
export const getGraph = (context: ISPFXContext): GraphFI => {
    if (context !== null) {
        //You must add the @pnp/logging package to include the PnPLogging behavior it is no longer a peer dependency
        // The LogLevel set's at what level a message will be written to the console
        _graph = graphfi().using(graphSPFx(context)).using(PnPLogging(LogLevel.Warning));
    }
    return _graph;
};
