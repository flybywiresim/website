import React from 'react';

import { TermsOfService } from '../../components/legal/TermsOfService';
import { PrivacyPolicy } from '../../components/legal/PrivacyPolicy';

export const ToS: React.FC = () => (
    <TermsOfService />
);

export const Privacy: React.FC = () => (
    <PrivacyPolicy />
);
