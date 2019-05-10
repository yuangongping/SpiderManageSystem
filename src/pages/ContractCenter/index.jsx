import React, { Component } from 'react';
import { Grid } from '@alifd/next';
import IceContainer from '@icedesign/container';
import ContractTable from '../../components/ContractTable';


const { Row, Col } = Grid;

export default class ContractCenter extends Component {
  static displayName = 'ContractCenter';

  static propTypes = {};

  static defaultProps = {};

  state = {
    searchQueryHistory: null,
  }

  render() {
    return (
      <Row gutter={20} wrap>
        <Col>
          <IceContainer style={{ padding: '0' }}>
            <div style={{ padding: '20px' }}>
              <ContractTable searchQueryHistory={this.state.searchQueryHistory} />
            </div>
          </IceContainer>
        </Col>
       
      </Row>
    );
  }
}
