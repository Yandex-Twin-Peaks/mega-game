import React from 'react';
import {
  useAdaptivity,
  AppRoot,
  SplitLayout,
  SplitCol,
  ViewWidth,
  View,
  Panel,
  PanelHeader,
  Header,
  Group,
  SimpleCell,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

const LeaderBoard = () => {
  const { viewWidth } = useAdaptivity();

  return (
    <AppRoot>
      <SplitLayout header={<PanelHeader separator={false}/>}>
        <SplitCol spaced={viewWidth > ViewWidth.MOBILE}>
          <View activePanel='main'>
            <Panel id='main'>
              <PanelHeader>LEADER BOARD</PanelHeader>
              <Group header={<Header mode='secondary'>Items</Header>}>
                <SimpleCell>Hello</SimpleCell>
                <SimpleCell>World</SimpleCell>
              </Group>
            </Panel>
          </View>
        </SplitCol>
      </SplitLayout>
    </AppRoot>
  );
};

export default LeaderBoard;
