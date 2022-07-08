import { request } from '@umijs/max';
import ENV from '@/env';

export async function loginUser(
    params: API.LoginParams,
    options?: { [key: string]: any },
) {
    return request<API.LoginResult>(`${ENV.liveservice}/user/login`, {
        method: 'POST',
        params: {
            ...params,
        },
        ...(options || {}),
    });
}

export async function getFakeCaptcha(
    params: {
        // query
        /** 手机号 */
        phone?: string;
    },
    options?: { [key: string]: any },
) {
    return request<API.FakeCaptcha>(`${ENV.liveservice}/user/login`, {
        method: 'GET',
        params: {
            ...params,
        },
        ...(options || {}),
    });
}

/** Logs out current logged in user session GET /user/logout */
export async function logoutUser(options?: { [key: string]: any }) {
    return request<any>('/user/logout', {
        method: 'GET',
        ...(options || {}),
    });
}
