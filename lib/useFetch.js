import { useState, useEffect } from 'react';

export default function useFetch(url, options) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        try {
          const res = await fetch(url, options);
          if(res.status != 200) {
            setError({ 
              'message': `Failed to fetch ${url}`,
              'status': `${res.status} ${res.statusText}`,
            });
            setLoading(false);
            return;
          }
          const json = await res.json();
          setData(json);
          setLoading(false)
        } catch (error) {
          setError(error);
          setLoading(false)
        }
      };
      fetchData();
    }, []);
    return { data, error, loading };
};

function useFetchListen(url, token, options) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        try {
          let fetchUrl;
          if (!url.includes("?")) {
            fetchUrl = url + "?token=" + token
          } else {
            fetchUrl = url + "&token=" + token
          }
          const res = await fetch(fetchUrl, options);
          if(res.status != 200) {
            setError({ 
              'message': `Failed to fetch ${fetchUrl}`,
              'status': `${res.status} ${res.statusText}`,
            });
            setLoading(false);
            return;
          }
          const json = await res.json();
          setData(json);
          setLoading(false)
        } catch (error) {
          setError(error);
          setLoading(false)
        }
      };
      fetchData();
    }, [url]);
    return { data, error, loading };
};

function useFetchGoogleAnalyticsIntegration(url, options, accountId, propertyId) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
        if (url.includes('properties') && !accountId) {
          setData(null);
          return { data, loading, error }
        }
        if (url.includes('views') && !(accountId && propertyId)) {
          setData(null);
          return { data, loading, error }
        }
        
        setLoading(true);
        try {
          let endpoint = url;
          if (accountId) {
            endpoint += `&accountId=${accountId}`
          }
          if (propertyId) {
            endpoint += `&propertyId=${propertyId}`
          }
          const res = await fetch(endpoint, options);
          const json = await res.json();
          setData(json);
          setLoading(false)
        } catch (error) {
          setError(error);
          setLoading(false)
        }
    };
    fetchData();
  }, [accountId, propertyId]);
  return { data, error, loading };
};

function useFetchGoogleAnalyticsFourIntegration(url, options, accountId) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
        if (url.includes('properties') && !accountId) {
          setData(null);
          return { data, loading, error }
        }
        
        setLoading(true);
        try {
          let endpoint = url;
          if (accountId) {
            endpoint += `&accountId=${accountId}`
          }
          const res = await fetch(endpoint, options);
          const json = await res.json();
          setData(json);
          setLoading(false)
        } catch (error) {
          setError(error);
          setLoading(false)
        }
    };
    fetchData();
  }, [accountId]);
  return { data, error, loading };
};

export { useFetchGoogleAnalyticsIntegration, useFetchGoogleAnalyticsFourIntegration, useFetchListen };