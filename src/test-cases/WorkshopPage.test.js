import React from 'react';
import axios from "axios";
import { getAllWorkshops, WORKSHOP_API_URL } from '../services/WorkshopService';

jest.mock('axios');
describe('fetch Workshop Data', () => {

    it('fetches successfully data from an API', async () => {
        let data;
        axios.get.mockImplementationOnce(() => Promise.resolve(data));
        await expect(getAllWorkshops('')).resolves.toEqual(data);
        expect(axios.get).toHaveBeenCalledWith(
            WORKSHOP_API_URL,
        );
    });

    it('fetches erroneously data from an API', async () => {
        const errorMessage = 'Network Error';
        axios.get.mockImplementationOnce(() =>
            Promise.reject(new Error(errorMessage)),
        );
    });
});
