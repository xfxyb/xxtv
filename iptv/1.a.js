
[rewrite_local]
    ^ https: \/\/isi\.csan.[a-z.]+\/.+\/(receipts$|subscribers\/[^/]+$) response-body-replace-regex .* {"request_date":"2025-02-22T14:52:31Z","request_date_ms":1740235951685,"subscriber":{"original_purchase_date":"2023-12-31T13:14:20Z","first_seen":"2025-02-21T15:10:07Z","original_application_version":"2395679.285305451","subscriptions":{"com.goodnotes.gn6_one_time_unlock_3999":{"is_sandbox":false,"ownership_type":"PURCHASED","billing_issues_detected_at":null,"period_type":"normal","grace_period_expires_date":null,"unsubscribe_detected_at":null,"original_purchase_date":"2022-09-08T01:04:18Z","purchase_date":"2022-09-08T01:04:17Z","store":"app_store"}}, "entitlements": { "apple_access": { "product_identifier": "com.goodnotes.gn6_one_time_unlock_3999", "grace_period_expires_date": null, "purchase_date": "2022-09-08T01:04:17Z" }, "gn5": { "product_identifier": "com.goodnotes.gn6_one_time_unlock_3999", "grace_period_expires_date": null, "purchase_date": "2022-09-08T01:04:17Z" }, "crossplatform_access": { "product_identifier": "com.goodnotes.gn6_one_time_unlock_3999", "grace_period_expires_date": null, "purchase_date": "2022-09-08T01:04:17Z" } }, "management_": null, "original_app_user_id": "10fdb8be-9230-4d6f-91c5-ed36d8cdca88", "last_seen": "2025-02-22T14:52:15Z"}, "Attention": "恭喜你抓到元数据！由墨鱼分享，请勿售卖或分享他人！"}



[mitm]
hostname = isi.csan.*