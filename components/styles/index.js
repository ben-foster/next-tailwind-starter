import tw from "tailwind-styled-components";

export const DashboardContainer = tw.div`
`;

export const DashboardSection = tw.div`
    py-4
`;

export const DashboardHeader = tw.div`
    pt-[4.5rem] 
    mb-16 
    w-full 
    text-center
`;

export const DashboardTitle = tw.h1`
    text-5xl
`;

export const ChartSectionHeader = tw.div`
    mb-10
`;

export const ChartSectionTitle = tw.h3`
    font-semibold 
    text-3xl
    mb-5
`;

export const ChartSectionSubtitle = tw.p`
    text-lg
    italic 
    text-blue-700
`;

export const ChartHeader = tw.div`
    mt-2
    mb-6
    w-full
    text-center
`;

export const ChartTitle = tw.h4`
    text-2xl
    font-semibold
`;

export const ChartDisclaimer = tw.p`
    text-sm
    text-gray-500
    mb-0
    italic
`;

export const ChartDisclaimerOverlay = tw.p`
    absolute
    bottom-0
    right-7
    left-7
    text-sm
    text-right
    text-gray-500
    mb-4
    italic
`;

export const ChartRow = tw.div`
    grid 
    gap-10 
    mb-10
`;

export const ChartBox = tw.div`
    relative
    bg-white 
    rounded-lg 
    shadow 
    border 
    border-gray-200 
    h-[380px]
    flex
    flex-col
    p-6
`;

export const ScorecardRow = tw.div`
    grid
    gap-5
    w-full
`;

export const ScorecardColumn = tw.div`
    flex
    flex-col
    items-center
`;

export const Scorecard = tw.div`
    flex
    flex-col
    items-center
    rounded-md
    w-full
    p-4
    pb-5
    mb-5
`;

export const ScorecardComparison = tw.div`
    flex
    flex-col
    items-center
    rounded-md
    w-full
    p-3
    pb-6
`;

export const ScorecardLabel = tw.div`
    text-lg
    text-gray-500
    text-center
`;

export const ScorecardValue = tw.div`
    text-4xl
    font-semibold
`;

export const SmallScorecardValue = tw.div`
    text-3xl
    font-semibold
`;

export const ScorecardComparisonValue = tw.div`
    text-2xl
    font-semibold
`;

export const SmallScorecardComparisonValue = tw.div`
    text-xl
    font-semibold
`;

export const ScorecardDelta = tw.div`

`;
