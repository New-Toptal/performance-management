import { Row, Col } from "antd";
import AnalysisGraph from "src/components/AnalysisGraph";
import AnalysisTable from "src/components/AnalysisTable";
import FlasSwitch from "../@flas/core/FlasSwitch";
import FlasTree from "../@flas/core/FlasTree";


export default () => {
    return (
        <>
            <Row>
                <Col>
                    <FlasTree />
                </Col>
                <Col>
                    <Row>
                        <Col span={2} offset={2}>
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