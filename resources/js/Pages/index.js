import React, { useCallback, useEffect, useState } from "react";
import {
    AppProvider,
    Page,
    Layout,
    SettingToggle,
    Heading,
    Badge,
    Frame,
    TextStyle,
} from "@shopify/polaris";

const Dashboard = ({ shopId }) => {

    const [active, setActive] = useState(false);
    const contentStatus = active ? "Deactivate" : "Activate";
    const textStatus = active ? "activated" : "deactivated";


    useEffect(() => {
        console.log("shopId", shopId);
    }, []);


     // Toggle enable disable button
     const toggleIsActive = useCallback(
        () => setActive((active) => !active),
        []
    );
    const handleToggle = async () => {
        try {
            // setToggleLoader(true);
            // const {
            //     data: { message, status, error },
            // } = await axios.post("configure", { status: !active });
            // if (status == 200) {
                toggleIsActive();
            //     setToggleLoader(false);
            //     setMessage(message);
            //     setAlert(true);
            // } else {
            //     setToggleLoader(false);
            //     setMessage(message);
            //     setError(true);
            // }
        } catch (err) {
            // setToggleLoader(false);
            // if (err.response?.data?.status == 400) {
            //     setMessage(err.response?.data?.error_description);
            //     setError(true);
            // }
        }
    };



    return (
        <>
            <div className="app-main">
                <AppProvider>
                    <Frame>
                        <Page>
                            {/* App status */}
                            <Layout.AnnotatedSection
                                id="scrollStatus"
                                title="Configure settings"
                                description="Controls whether the Scroll to top will be shown to vistors or not."
                            >
                                <SettingToggle
                                    action={{
                                        content: contentStatus,
                                        onAction: handleToggle,
                                        // loading: toggleLoader ? true : false,
                                    }}
                                    enabled={active}
                                >
                                    <Heading>
                                        Status ON/OFF
                                    </Heading>
                                    {" "}
                                    <Badge
                                        status={active ? "success" : "critical"}
                                    >
                                        <TextStyle variation="strong">
                                            {textStatus}
                                        </TextStyle>
                                    </Badge>
                                </SettingToggle>
                            </Layout.AnnotatedSection>
                        </Page>
                    </Frame>
                </AppProvider>
            </div>
        </>
    );
};

export default Dashboard;
