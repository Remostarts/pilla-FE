'use client';

import React, { useState } from 'react';

import { Heading } from '../../shared/Heading';

import KeyNavigation from './KeyNavigation';

import { Switch } from '@/components/ui/switch';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function ApiAndWebhook() {
  const [testMode, setTestMode] = useState(true);
  const [apiActiveKeys, setApiActiveKeys] = useState<'test' | 'live'>('test');
  const [webhookActiveKeys, setWebhookActiveKeys] = useState<'test' | 'live'>('test');

  return (
    <div className="size-full  p-6">
      <div className="flex space-x-6">
        <div className="w-1/3">
          <Heading heading="API Documentation" className="mb-2 text-xl font-semibold" />
          <p className="mb-3 text-sm text-gray-600">
            Our documentation includes the necessary libraries, APIs, and SDKs to integrate Pilla
            into your website or application
          </p>
          <button
            type="button"
            className="rounded-full border border-green-500 px-4 py-1 text-green-500"
          >
            Visit Documentation
          </button>
        </div>
        <div className="w-2/3 space-y-4">
          <Card className="bg-[#F7F7F7]">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-semibold">API Configuration</CardTitle>
              <div className="flex items-center space-x-2 rounded-full bg-primary-100 px-4 py-2">
                <span className="text-sm text-gray-500">Test Mode</span>
                <Switch
                  checked={testMode}
                  onCheckedChange={setTestMode}
                  className="data-[state=checked]:bg-orange-500"
                />
              </div>
            </CardHeader>
            <CardContent>
              <KeyNavigation activeKey={apiActiveKeys} onKeyChange={setApiActiveKeys} />
              <div className="space-y-3">
                <div>
                  <Label htmlFor="secretKey">Test Secret key</Label>
                  <Input
                    id="secretKey"
                    value="PILLA_TEST-d490f013fbe7cd9d47913a1f97dace59-X"
                    readOnly
                  />
                </div>
                <div>
                  <Label htmlFor="publicKey">Test Public key</Label>
                  <Input
                    id="publicKey"
                    value="PILLA_TEST-d490f013fbe7cd9d47913a1f97dace59-X"
                    readOnly
                  />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-[#F7F7F7]">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Webhooks</CardTitle>
            </CardHeader>
            <CardContent>
              <KeyNavigation activeKey={webhookActiveKeys} onKeyChange={setWebhookActiveKeys} />
              <div>
                <Label htmlFor="webhookUrl">URL</Label>
                <Input id="webhookUrl" placeholder="Enter webhook URL" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
