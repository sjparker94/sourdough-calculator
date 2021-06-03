import { LargeHeading } from '@/components/LargeHeading/LargeHeading';
import { PageMain } from '@/components/PageMain/PageMain';
import { TargetBreadFormWrapper } from '@/components/TargetBreadForm/TargetBreadFormWrapper';
import { TargetBread } from '@/types/targetBread';

export default function HomePage() {
    const initialValues: TargetBread = {
        totalWeight: 910,
        doughHydration: 80,
        salt: 2.1,
        levain: 20,
        levainHydration: 100,
        proofingTemperature: 24,
    };
    return (
        <PageMain>
            <LargeHeading>BestEndBaker Sourdough Calculator</LargeHeading>
            <TargetBreadFormWrapper {...initialValues} />
        </PageMain>
    );
}
