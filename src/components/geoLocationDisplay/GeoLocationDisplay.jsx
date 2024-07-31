import React from 'react';
import { useGeolocated } from 'react-geolocated';

const GeoLocationDisplay = () => {
    const {
        coords,
        isGeolocationAvailable,
        isGeolocationEnabled,
        positionError
    } = useGeolocated({
        positionOptions: {
            enableHighAccuracy: false,
        },
        userDecisionTimeout: 5000,
    });

    if (!isGeolocationAvailable) {
        return <div>Ваш браузер не поддерживает Geolocation</div>;
    }

    if (!isGeolocationEnabled) {
        return <div>Geolocation не включен</div>;
    }

    if (positionError) {
        return <div>Ошибка получения геолокации: {positionError.message}</div>;
    }

    if (!coords) {
        return <div>Получение данных...</div>;
    }

    return (
        <div>
            <p>Широта: {coords.latitude}</p>
            <p>Долгота: {coords.longitude}</p>
        </div>
    );
};

export default GeoLocationDisplay;
