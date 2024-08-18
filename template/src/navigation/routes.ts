import {RootStackParamList} from 'navigation/containers/App';
import {RootTabParamList} from 'navigation/containers/Tab';
import {RootDrawerParamList} from 'navigation/containers/Drawer';

import {Route} from 'types/route';

export const tabs: Route<RootTabParamList>[] = [];

export const drawers: Route<RootDrawerParamList>[] = [];

export const routes: Route<RootStackParamList>[] = [];
