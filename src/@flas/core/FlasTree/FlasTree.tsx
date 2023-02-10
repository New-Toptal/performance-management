import { Tree } from "antd";
import { DataNode, TreeProps } from "antd/es/tree";

const treeData: DataNode[] = [
    {
        title: 'PUST',
        key: '0-0',
        children: [
            {
                title: 'Group 1',
                key: '0-0-0',
                children: [
                    {
                        title: 'boss',
                        key: '0-0-0-0',
                    },
                    {
                        title: 'member1',
                        key: '0-0-0-1',
                    },
                    {
                        title: 'member2',
                        key: '0-0-0-2',
                    },
                ],
            },
            {
                title: 'Group 2',
                key: '0-0-1',
                children: [
                    {
                        title: 'boss',
                        key: '0-0-1-0',
                    },
                ],
            },
            {
                title: 'Group 3',
                key: '0-0-2',
                children: [
                    {
                        title: 'boss',
                        key: '0-0-2-0',
                    },
                    {
                        title: 'member3',
                        key: '0-0-2-1',
                    },
                ],
            },
        ],
    },
];

export default () => {
    const onSelect: TreeProps['onSelect'] = (selectedKeys, info) => {
        console.log("selected", selectedKeys, info);
    }
    return (
        <>
            <div className="flas-tree">
                <Tree
                    showLine
                    defaultExpandedKeys={["0-0-0"]}
                    onSelect={onSelect}
                    treeData={treeData}
                />
            </div>
        </>
    );
}