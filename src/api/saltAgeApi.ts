import RestApi from '../utils/RestApi';
import { SALTAGE_APP_ID, SALTAGE_SECRET } from '../env';
interface Provider {
    id: string
    code: string
    country_code: string
    bic_codes: string[]
    dynamic_registration_code: string
    identification_codes: string[]
    group_code: string
    group_name: string
    hub: string
    name: string
    status: string
    mode: string
    regulated: boolean
    logo_url: string
    timezone: string
    supported_iframe_embedding: boolean
    optional_interactivity: boolean
    customer_notified_on_sign_in: boolean
    created_at: string
    updated_at: string
}

const SaltAgeApi = new RestApi([
    {
        url: '/providers',
        name: 'providers'
    }
], {
    headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json',
        'App-id': SALTAGE_APP_ID,
        'Secret': SALTAGE_SECRET
    },
    baseUrl: 'https://www.saltedge.com/api/v6'
});

export const getProviders = () => {
    return SaltAgeApi['providers'].get().then((response) => response.data as Provider[]);
}