'use client';
import useTradingViewWidget from '@/hooks/useTradingViewWidget';
import { cn } from '@/lib/utils';
import { memo } from 'react';

interface TradingViewWidgetProps {
  title?: string;
  scriptUrl: string;
  config: Record<string, unknown>;
  height?: number;
  className?: string;
}

function TradingViewWidget({
  title,
  scriptUrl,
  config,
  height,
  className,
}: TradingViewWidgetProps) {
  const { containerRef } = useTradingViewWidget(scriptUrl, config, height);

  return (
    <div className="w-full">
      {title && (
        <h3 className="mb-4 text-2xl font-semibold text-gray-100">{title}</h3>
      )}
      <div
        className={cn(`tradingview-widget-container`, className)}
        ref={containerRef}
      >
        <div
          className="tradingview-widget-container__widget"
          style={{
            height: height ?? 600,
            width: `100%`,
          }}
        />
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);
