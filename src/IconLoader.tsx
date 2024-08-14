import StatisticsIcon from '../public/statistics.svg?react';
import ChannelsIcon from '../public/channels.svg?react';
import WorkspaceIcon from '../public/workspace.svg?react';
import LandingsIcon from '../public/landings.svg?react';

import AutomationIcon from '../public/automation.svg?react';
import MessengerIcon from '../public/messenger.svg?react';
import CustomersIcon from '../public/customers.svg?react';

import TeamsIcon from '../public/teams.svg?react';
import SettingsIcon from '../public/settings.svg?react';
import HelpIcon from '../public/help.svg?react';
import { FunctionComponent, SVGProps } from 'react';

const iconComponents: Record<string, FunctionComponent<SVGProps<SVGSVGElement>>> = {
  statistics: StatisticsIcon,
  channels: ChannelsIcon,
  workspace: WorkspaceIcon,
  landings: LandingsIcon,

  automation: AutomationIcon,
  messenger: MessengerIcon,
  customers: CustomersIcon,

  teams: TeamsIcon,
  settings: SettingsIcon,
  help: HelpIcon,
};

const IconLoader = ({ name }: { name: string }) => {
  const IconComponent = iconComponents[name] || null;

  return IconComponent ? <IconComponent /> : null;
};

export default IconLoader;
