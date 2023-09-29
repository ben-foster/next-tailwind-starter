import Head from 'next/head';

const MetaData = ({ title }) => (
    <Head>
        <title>{`${title} | Saltbox`}</title>
    </Head>
);

export default MetaData;