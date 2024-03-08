import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./tabs.scss";

interface TabItem {
  key: string;
  tab: JSX.Element | any;
  content: JSX.Element | any;
}

interface TabsComponentProps {
  items: TabItem[];
  defaultActiveKey?: any;
}

const TabsComponent: React.FC<TabsComponentProps> = ({
  items,
  defaultActiveKey,
}) => {
  return (
    <div className="tabs_holder">
      <Tabs defaultIndex={defaultActiveKey}>
        <TabList>
          {items.map((item) => (
            <Tab key={item.key}>{item.tab}</Tab>
          ))}
        </TabList>

        {items.map((item) => (
          <TabPanel key={item.key}>{item.content}</TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default TabsComponent;
