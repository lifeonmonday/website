import React from 'react'
import { graphql } from 'gatsby'
import TableResponsive from '~components/common/table-responsive'
import { FormatDate, FormatNumber } from '~components/utils/format'
import Layout from '~components/layout'

const formatNumber = number => <FormatNumber number={number} />

export default ({ pageContext, path, data }) => {
  const state = pageContext
  return (
    <Layout
      title={`${state.name}: Cases`}
      returnLinks={[
        { link: '/data', title: 'Our Data' },
        { link: `/data/state/${state.slug}`, title: state.name },
      ]}
      path={path}
    >
      <p>Cases</p>
      <TableResponsive
        labels={[
          {
            field: 'date',
            label: 'Date',
            format: date => <FormatDate date={date} format="ccc LLL d yyyy" />,
          },
          {
            field: 'positive',
            label: 'Cases (cumulative)',
            format: formatNumber,
          },

          {
            field: 'positiveIncrease',
            label: 'Cases (currently)',
            format: formatNumber,
          },
        ]}
        data={data.allCovidStateDaily.nodes}
      />
    </Layout>
  )
}

export const query = graphql`
  query($state: String!) {
    allCovidStateDaily(
      filter: { state: { eq: $state } }
      sort: { fields: date, order: DESC }
    ) {
      nodes {
        date
        positive
        positiveIncrease
      }
    }
  }
`
