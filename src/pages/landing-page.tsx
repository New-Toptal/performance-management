import { Row, Col, Divider } from "antd";
import AnalysisGraph from "src/components/AnalysisGraph";
import AnalysisTable from "src/components/AnalysisTable";
import FlasSwitch from "../@flas/core/FlasSwitch";
import FlasTree from "../@flas/core/FlasTree";


export default () => {
    return (
        <>
            <Row>
                <Col span={6}>
                    <FlasTree />
                </Col>
                <Col span={18}>
                    <Row>
                        <Col span={2} offset={16}>
                            <FlasSwitch />
                        </Col>
                    </Row>
                    <Row>
                        {/* <AnalysisGraph /> */}
                        <AnalysisTable />
                    </Row>
                </Col>
            </Row>
        </>
    );
}